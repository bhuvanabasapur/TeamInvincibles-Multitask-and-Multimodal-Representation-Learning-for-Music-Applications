import json
from glob import glob

from sklearn.model_selection import train_test_split
from tensorflow.keras.callbacks import ModelCheckpoint, ReduceLROnPlateau

from models import transformer_classifier
from prepare_data import get_id_from_path, DataGenerator

if __name__ == "__main__":
    from collections import Counter

    h5_name = "transformer.h5"
    batch_size = 16
    epochs = 50
    CLASS_MAPPING = json.load(open("/content/drive/Shareddrives/musicguru/master-gdc-gdcdatasets-2018655052_gdcfma-metadata-fma_metadata.zip (Unzipped Files)/fma_metadata/mapping.json"))
    id_to_genres = json.load(open("/content/drive/Shareddrives/musicguru/master-gdc-gdcdatasets-2018655052_gdcfma-metadata-fma_metadata.zip (Unzipped Files)/fma_metadata/tracks_genre.json"))
    id_to_genres = {int(k): v for k, v in id_to_genres.items()}
    #id_to_genres ={0: "Country", 1: "Electro", 2: "Folk", 3: "Hip-Hop", 4: "Jazz", 5: "Metal", 6: "Pop", 7: "Rock"}
    
    base_path = "/content/drive/Shareddrives/musicguru/fma_medium"
    files = sorted(list(glob(base_path + "/*/*.npy")))
    files = [x for x in files if id_to_genres[int(get_id_from_path(x))]]
    #labels = [id_to_genres[int(get_id_from_path(x))] for x in files]
    labels = ["Country","Electro", "Folk", "Hip-Hop", "Jazz", "Metal", "Pop", "Rock" ]
    print(labels)

    samples = list(zip(files, labels))

    strat = [a[-1] for a in labels]
    cnt = Counter(strat)
    strat = [a if cnt[a] > 2 else "" for a in strat]

    train, val = train_test_split(
        samples, test_size=0.3, random_state=1337, stratify=strat
    )

    model = transformer_classifier(n_classes=len(CLASS_MAPPING))

    checkpoint = ModelCheckpoint(
        h5_name,
        monitor="val_loss",
        verbose=1,
        save_best_only=True,
        mode="min",
        save_weights_only=True,
    )
    reduce_o_p = ReduceLROnPlateau(
        monitor="val_loss", patience=20, min_lr=1e-7, mode="min"
    )

    model.fit_generator(
        DataGenerator(train, batch_size=batch_size, class_mapping=CLASS_MAPPING),
        validation_data=DataGenerator(
            val, batch_size=batch_size, class_mapping=CLASS_MAPPING
        ),
        epochs=epochs,
        callbacks=[checkpoint, reduce_o_p],
        use_multiprocessing=True,
        workers=12,
        verbose=2,
        max_queue_size=64,
    )

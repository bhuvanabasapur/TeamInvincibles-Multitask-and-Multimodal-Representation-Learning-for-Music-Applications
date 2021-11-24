<template>
  <div class="events container">
    <h2 class="subtitle is-3">
    Make sure to explore MusicGuru's features!
    </h2>
    <div class="columns is-multiline">
      <div v-for="event in events" :event="event" :key="event.id" class="column is-one-quarter">
        <router-link :to="'/event/' + event.id">
          <EventCard :event="event" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import EventCard from '@/components/EventCard';
export default {
  name: 'EventsList',
  components : {
    EventCard
  },
  data () {
    return {
      event: {},
      events: [
        {
          id: 1,
          name: 'Autocomplete/Remix your melody!',
          // category: 'Fundraising',
          // description: 'Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.',
          // featuredImage: 'https://placekitten.com/500/500',
          // images: [
          //   'https://placekitten.com/500/500',
          //   'https://placekitten.com/500/500',
          //   'https://placekitten.com/500/500',
          // ],
          // location: '1234 Fancy Ave',
          // date: '12-25-2019',
          // time: '11:30'
        },
        {
          id: 2,
          name: 'Try the model yourself?',
          // category: 'Adoptions',
          // description: 'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
          // featuredImage: 'https://github.com/arpithagurumurthy/VUE-Weather-App/blob/main/cold_screenshot.png',
          // images: [
          //   'https://github.com/arpithagurumurthy/VUE-Weather-App/blob/main/cold_screenshot.png'
          // ],
          location: 'Link to colab',
          // date: '11-21-2019',
          // time: '12:00'
        },
        {
          id: 3,
          name: 'Melody Mixer',
          // category: 'Adoptions',
          // description: 'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
          // featuredImage: 'https://placekitten.com/500/500',
          // images: [
          //   'https://placekitten.com/500/500'
          // ],
          // location: '1234 Dog Alley',
          // date: '11-21-2019',
          // time: '12:00'
        }
      ]
    }    
  }
}
</script>
<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>
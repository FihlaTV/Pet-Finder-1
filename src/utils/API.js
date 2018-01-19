import axios from 'axios';

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog() {
    return axios.get('/api/pets/getPet')
      .then((res) => {
        const result = res.data[Math.floor(Math.random() * 7) + 1].petImage;
        console.log(result);
        return result;
      });
  },
  getDogsOfBreed(breed) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`);
  },
  getBaseBreedsList() {
    return axios.get('https://dog.ceo/api/breeds/list');
  },
};
// Destructuring:
const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Because we're using destructuring here, we can't just put `const { age }: number`.
// Instead, we have to put the expected structure of the `profile` on the right, like so:
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

export const getPhotosAPI = async (page = 1) => {
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`
  );
  return await request.json();
};

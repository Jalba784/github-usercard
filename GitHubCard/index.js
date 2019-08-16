/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const container = document.querySelector('.cards');

function Lambda(objt) {
    // Card creation
    const card = document.createElement('div');
    card.classList.add('lambda-card');

    // Image creation
    const img = document.createElement('img');
    img.src = objt['avatar_url'];
    card.appendChild(img);

    // Card-info div
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    card.appendChild(cardInfo);

    // User Name - h3
    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = objt.name || 'See Username';
    cardInfo.appendChild(name);

    // Login name - p
    const userName = document.createElement('p');
    userName.classList.add('username');
    userName.textContent = objt.login;
    cardInfo.appendChild(userName);

    // Location - p
    const location = document.createElement('p');
    location.textContent = `Location: ${objt.location || "No Location Provided"}`;
    cardInfo.appendChild(location);

    // Profile - p
    const profile = document.createElement('p');
    profile.textContent = `Profile:`;
    cardInfo.appendChild(profile);

    // Href anchor - a
    const anchor = document.createElement('a');
    anchor.href = objt['html_url'];
    anchor.textContent = objt['html_url'];
    profile.appendChild(anchor);

    // Followers - p
    const followers = document.createElement('p');
    followers.textContent = `Followers: ${objt['followers']}`;
    cardInfo.appendChild(followers);

    // Following - p
    const following = document.createElement('p');
    following.textContent = `Following: ${objt['following']}`;
    cardInfo.appendChild(following);

    // Bio - p
    const bio = document.createElement('p');
    bio.textContent = `Bio: ${objt['bio'] || "No Bio Provided"}`;
    cardInfo.appendChild(bio);

    // Return card
    return card;
}



axios.get('https://api.github.com/users/Jalba784')
    .then((item) => {
        console.log(item.data);
        const eachPerson = item.data;
        console.log(Lambda(eachPerson));
        const lambdaCard = Lambda(eachPerson);
        container.appendChild(lambdaCard)


        // // Create components for each image returned
        // eachPerson.forEach((person) => {
        //     container.appendChild(lambdaCard)
        // })


    })
    .catch(() => {
        console.log('error.....')
    });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return
          the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
// const container = document.querySelector('.cards');
//
// function Lambda(objt) {
//     // Card creation
//     const card = document.createElement('div');
//     card.classList.add('lambda-card');
//
//     // Image creation
//     const image = document.createElement('img');
//     image.src = {objt};
//     card.appendChild(image);
//
//     // Card-info div
//     const cardInfo = document.createElement('div');
//     cardInfo.classList.add('card-info');
//     card.appendChild(cardInfo);
//
//     // User Name - h3
//     const name = document.createElement('h3');
//     name.classList.add('name');
//     name.textContent = {objt};
//     cardInfo.appendChild(name);
//
//     // Login name - p
//     const userName = document.createElement('p');
//     userName.classList.add('username');
//     userName.textContent = {objt};
//     cardInfo.appendChild(userName);
//
//     // Location - p
//     const location = document.createElement('p');
//     location.textContent = `Location: ${objt}`;
//     cardInfo.appendChild(location);
//
//     // Profile - p
//     const profile = document.createElement('p');
//     profile.textContent = `Profile:`;
//     cardInfo.appendChild(profile);
//
//     // Href anchor - a
//     const anchor = document.createElement('a');
//     anchor.href = {objt};
//     profile.appendChild(anchor);
//
//     // Followers - p
//     const followers = document.createElement('p');
//     followers.textContent = `Followers: ${objt}`;
//     cardInfo.appendChild(followers);
//
//     // Following - p
//     const following = document.createElement('p');
//     following.textContent = `Following: ${objt}`;
//     cardInfo.appendChild(following);
//
//     // Bio - p
//     const bio = document.createElement('p');
//     bio.textContent = `Bio: ${objt}`;
//     cardInfo.appendChild(bio);
//
//     // Return card
//     return card;
// }
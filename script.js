
   const animeList = [
    {
      title: "Naruto",
      image: "https://static.hdrezka.ac/i/2022/9/28/ceda2fb43d53dua28x92y.png",
      description: "A ninja's journey to become Hokage.",
      trailer: "https://www.youtube.com/watch?v=_3AyV5pAvhY",
      rating: 4.6,
      genre: "action",
       watch: "Naruto.html"
    },
    {
      title: "Attack on Titan",
      image: "https://static.hdrezka.ac/i/2022/1/22/t4859e335a4bbzt59t52v.png",
      description: "Humanity fights against man-eating giants.",
      trailer: "https://www.youtube.com/watch?v=MGRm4IzK1SQ",
      rating: 4.8,
      genre: "adventure",
      watch: "Attack.html"
    },
    {
      title: "Demon Slayer",
      image: "https://pm1.aminoapps.com/8291/b5df80e96c0626ddc82a8791068eb1f1bc408f5ar1-816-903v2_00.jpg",
      description: "A boy battles demons to save his sister.",
      trailer:"https://www.youtube.com/watch?v=VQGCKyvzIM4",
      rating: 4.8,
      genre: "action" 
    },
    {
      title: "One Piece",
      image: "https://static.hdrezka.ac/i/2024/12/22/kd17771136b12my22d31x.jpg",
      description: "A pirate adventure in search of treasure.",
      trailer: "https://www.youtube.com/watch?v=MCFkHWR1h1o",
      rating: 4.7,
      genre: "adventure",
      watch: "OnePiece.html"
    },
    {
      title: "Death Note",
      image: "https://i.pinimg.com/736x/c6/28/84/c62884b7f1651290f0fc79e5de2978ef.jpg",
      description: "A high school student discovers a notebook with deadly powers.",
      trailer: "https://www.youtube.com/watch?v=NlJZ-YgAt-c",
      rating: 4.9, 
      genre: "horror",
      watch: "Dead.html"
    },
    {
      title: "Fullmetal Alchemist",
      image: "https://kinojump.com/uploads/posts/2022-11/fullmetal-alchemist.webp",
      description: "Two brothers use alchemy to search for the Philosopher's Stone.",
      trailer: "https://www.youtube.com/watch?v=dMHY7ZpVfwI",
      rating: 4.8,
      genre: "fantasy"
    },
    {
      title: "Jujutsu Kaisen",
      image: "https://i.pinimg.com/736x/ac/43/52/ac4352f877cd4265d69538bd7532b7b3.jpg",
      description: "A student becomes host to a powerful curse.",
      trailer: "https://www.youtube.com/watch?v=PKHQuQF1S8k",
      rating: 4.9,
     genre: "adventure"
     
    },
    {
      title: "My Hero Academia",
      image: "https://static.hdrezka.ac/i/2022/10/4/a9d848e3cc5d8va23h74b.png",
      description: "Superpowers, or Quirks, shape the world of heroes and villains.",
      trailer: "https://www.youtube.com/watch?v=wIb3nnOeves",
      rating: 4.7,
      genre: "adventure"
    },
    {
      title: "Tokyo Ghoul",
      image: "https://static.hdrezka.ac/i/2021/11/15/b37aa8e5e014fwi79x48v.png",
      description: "A boy becomes half-ghoul and must survive in a world of monsters.",
      trailer: "https://www.youtube.com/watch?v=Kbb8zPQBmOw",
      rating: 4.8,
      genre: "horror"
    }
  ];
  
  function renderAnime(animeArray) {
    const grid = document.getElementById("animeGrid");
  const template = document.getElementById("animeCard");
  grid.innerHTML = "";

  if (animeArray.length === 1) {
    grid.classList.add("place-items-center");
  } else {
    grid.classList.remove("place-items-center");
  }
    
    animeArray.forEach(anime => {
      const card = template.content.cloneNode(true);
      card.querySelector("img").src = anime.image;
      card.querySelector("img").alt = anime.title;
      card.querySelector("h2").textContent = anime.title; 
      card.querySelector(".anime-rating").textContent = `★ ${anime.rating} / 5`;
      card.querySelector(".anime-description").textContent = anime.description;
      card.querySelector(".watch-button").href = anime.watch || "#";
      card.querySelector("button").onclick = () => window.open(anime.trailer, "_blank"); 
      grid.appendChild(card);
    });
  }
  
  function filterAnime() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = animeList.filter(a => a.title.toLowerCase().includes(query));
    renderAnime(filtered);
  }
  
  renderAnime(animeList);
  function filterByGenre(genre) {
    const filtered = animeList.filter(a => a.genre === genre);
    renderAnime(filtered);
  }
  

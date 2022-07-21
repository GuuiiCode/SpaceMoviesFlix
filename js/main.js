async function apiGet() {
    const carousel = document.querySelector(".carousel");
    const movies = await fetch("http://localhost:3000/movies")
        .then(resolve => resolve.json())
        .then(data => data);

    await movies.map(movie => {
        const carouselMovies = `
            <div class="carousel-main">
                <div class="black-overlay"></div>
                <img src=${movie.image} alt=${movie.title}>
                <div>
                    <h2>${movie.title}</h2>
        
                    <ul>
                        <li>
                            <p>${movie.raiting}</p>
                        </li>
                        <li class="hd">
                        
                        ${movie.hd ? `
                        <svg width="20" height="10" viewBox="0 0 20 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.684 2.818V7H9.138V5.104H7.008V7H6.462V2.818H7.008V4.654H9.138V2.818H9.684ZM11.9183 2.818C12.3743 2.818 12.7683 2.904 13.1003 3.076C13.4363 3.244 13.6923 3.486 13.8683 3.802C14.0483 4.118 14.1383 4.49 14.1383 4.918C14.1383 5.346 14.0483 5.718 13.8683 6.034C13.6923 6.346 13.4363 6.586 13.1003 6.754C12.7683 6.918 12.3743 7 11.9183 7H10.6163V2.818H11.9183ZM11.9183 6.55C12.4583 6.55 12.8703 6.408 13.1543 6.124C13.4383 5.836 13.5803 5.434 13.5803 4.918C13.5803 4.398 13.4363 3.992 13.1483 3.7C12.8643 3.408 12.4543 3.262 11.9183 3.262H11.1623V6.55H11.9183Z"
                                fill="white" />
                            <rect x="0.5" y="0.5" width="19" height="9" rx="2.5" stroke="white" />
                        </svg>`: ''
                        }
        
                            <p>${movie.age}</p>
                        </li>
                        <li>
                            <p>${movie.release}</p>
                        </li>
                    </ul>
        
                    <p>${movie.resume}</p>
                    <button><a href="/watch/${movie.id}">Assitir</a> </button>
                </div>
            </div>
        `;

        carousel.insertAdjacentHTML('afterbegin', carouselMovies);
    });

    $(carousel).slick({
        dots: false,
        infinite: true,
        speed: 2500,
        autoplaySpeed: 2500,
        autoplay: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: false,
        nextArrow: false,
        fade: true
    });
}

apiGet();

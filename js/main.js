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

    $('.category-movies').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<svg class="prev" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5999 12.7101C10.5062 12.6171 10.4318 12.5065 10.381 12.3846C10.3302 12.2628 10.3041 12.1321 10.3041 12.0001C10.3041 11.868 10.3302 11.7373 10.381 11.6155C10.4318 11.4936 10.5062 11.383 10.5999 11.2901L15.1899 6.71006C15.2836 6.6171 15.358 6.5065 15.4088 6.38464C15.4596 6.26278 15.4857 6.13207 15.4857 6.00006C15.4857 5.86805 15.4596 5.73734 15.4088 5.61548C15.358 5.49362 15.2836 5.38302 15.1899 5.29006C15.0025 5.10381 14.7491 4.99927 14.4849 4.99927C14.2207 4.99927 13.9673 5.10381 13.7799 5.29006L9.18989 9.88006C8.62809 10.4426 8.31253 11.2051 8.31253 12.0001C8.31253 12.7951 8.62809 13.5576 9.18989 14.1201L13.7799 18.7101C13.9662 18.8948 14.2176 18.999 14.4799 19.0001C14.6115 19.0008 14.742 18.9756 14.8638 18.9258C14.9856 18.8761 15.0965 18.8027 15.1899 18.7101C15.2836 18.6171 15.358 18.5065 15.4088 18.3846C15.4596 18.2628 15.4857 18.1321 15.4857 18.0001C15.4857 17.868 15.4596 17.7373 15.4088 17.6155C15.358 17.4936 15.2836 17.383 15.1899 17.2901L10.5999 12.7101Z" fill="#C80410"/></svg>',
        nextArrow: '<svg class="next" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3998 9.88006L10.8098 5.29006C10.6225 5.10381 10.369 4.99927 10.1048 4.99927C9.84065 4.99927 9.5872 5.10381 9.39983 5.29006C9.3061 5.38302 9.23171 5.49362 9.18094 5.61548C9.13017 5.73734 9.10403 5.86805 9.10403 6.00006C9.10403 6.13207 9.13017 6.26278 9.18094 6.38464C9.23171 6.5065 9.3061 6.6171 9.39983 6.71006L13.9998 11.2901C14.0936 11.383 14.168 11.4936 14.2187 11.6155C14.2695 11.7373 14.2956 11.868 14.2956 12.0001C14.2956 12.1321 14.2695 12.2628 14.2187 12.3846C14.168 12.5065 14.0936 12.6171 13.9998 12.7101L9.39983 17.2901C9.21153 17.477 9.10521 17.7312 9.10428 17.9965C9.10334 18.2619 9.20786 18.5168 9.39483 18.7051C9.58181 18.8934 9.83593 18.9997 10.1013 19.0006C10.3667 19.0016 10.6215 18.897 10.8098 18.7101L15.3998 14.1201C15.9616 13.5576 16.2772 12.7951 16.2772 12.0001C16.2772 11.2051 15.9616 10.4426 15.3998 9.88006V9.88006Z" fill="#C80410"/></svg>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    // arrows: false,
                    centerMode: false,
                    centerPadding: '20px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 530,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
}

apiGet();

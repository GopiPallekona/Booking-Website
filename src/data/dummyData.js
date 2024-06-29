const data = {
    cities: [
      {
        name: 'Mumbai',
        theaters: [
          {
            name: 'PVR Juhu',
            address: 'Juhu, Mumbai, Maharashtra',
            pricePerSeat: 200,
            seats: Array.from({ length: 50 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: '3 Idiots', duration: '2h 51m', poster: 'src/assets/images/3 idiots.jpg' },
              { title: 'Dangal', duration: '2h 49m', poster: 'src/assets/images/dangal.jpg' }
            ]
          },
          {
            name: 'INOX Nariman Point',
            address: 'Nariman Point, Mumbai, Maharashtra',
            pricePerSeat: 250,
            seats: Array.from({ length: 60 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Lagaan', duration: '3h 44m', poster: 'src/assets/images/lagaan.jpg' },
              { title: 'PK', duration: '2h 33m', poster: 'src/assets/images/pk.jpg' }
            ]
          }
        ]
      },
      {
        name: 'Delhi',
        theaters: [
          {
            name: 'PVR Saket',
            address: 'Saket, Delhi',
            pricePerSeat: 220,
            seats: Array.from({ length: 40 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Kabir Singh', duration: '2h 52m', poster: 'src/assets/images/kabir.jpg' },
              { title: 'Baahubali', duration: '2h 39m', poster: 'src/assets/images/bahubali.jpg' }
            ]
          },
          {
            name: 'Carnival Cinemas',
            address: 'Cannaught Place, Delhi',
            pricePerSeat: 230,
            seats: Array.from({ length: 50 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Gully Boy', duration: '2h 36m', poster: 'src/assets/images/gullyboy.jpg' },
              { title: 'War', duration: '2h 34m', poster: 'src/assets/images/war.jpg' }
            ]
          }
        ]
      },
      {
        name: 'Bangalore',
        theaters: [
          {
            name: 'PVR Koramangala',
            address: 'Koramangala, Bangalore, Karnataka',
            pricePerSeat: 200,
            seats: Array.from({ length: 45 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'KGF', duration: '2h 36m', poster: 'src/assets/images/kgf2.jpg' },
              { title: 'Master', duration: '2h 59m', poster: 'src/assets/images/master.jpg' }
            ]
          },
          {
            name: 'INOX Lido Mall',
            address: 'Lido Mall, Bangalore, Karnataka',
            pricePerSeat: 240,
            seats: Array.from({ length: 50 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'M.S. Dhoni', duration: '3h 10m', poster: 'src/assets/images/ms dhoni.jpg' },
              { title: 'Drishyam', duration: '2h 43m', poster: 'src/assets/images/drishyam.jpg' }
            ]
          }
        ]
      },
      {
        name: 'Chennai',
        theaters: [
          {
            name: 'Sathyam Cinemas',
            address: 'Royapettah, Chennai, Tamil Nadu',
            pricePerSeat: 180,
            seats: Array.from({ length: 50 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Kabali', duration: '2h 32m', poster: 'src/assets/images/kabali.jpg' },
              { title: 'Vikram Vedha', duration: '2h 27m', poster: 'src/assets/images/vikram.jpg' }
            ]
          },
          {
            name: 'Escape Cinemas',
            address: 'Express Avenue Mall, Chennai, Tamil Nadu',
            pricePerSeat: 220,
            seats: Array.from({ length: 60 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Asuran', duration: '2h 25m', poster: 'src/assets/images/asuran.jpg' },
              { title: 'Kaithi', duration: '2h 25m', poster: 'src/assets/images/kaithi.jpg' }
            ]
          }
        ]
      },
      {
        name: 'Hyderabad',
        theaters: [
          {
            name: 'Prasads IMAX',
            address: 'Necklace Road, Hyderabad, Telangana',
            pricePerSeat: 210,
            seats: Array.from({ length: 55 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Bahubali 2', duration: '2h 47m', poster: 'src/assets/images/bahubali2.jpg' },
              { title: 'Saaho', duration: '2h 51m', poster: 'src/assets/images/saaho.jpg' }
            ]
          },
          {
            name: 'PVR Panjagutta',
            address: 'Panjagutta, Hyderabad, Telangana',
            pricePerSeat: 230,
            seats: Array.from({ length: 50 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Eega', duration: '2h 14m', poster: 'src/assets/images/eega.jpg' },
              { title: 'Arjun Reddy', duration: '3h 2m', poster: 'src/assets/images/arjunreddy.jpg' }
            ]
          }
        ]
      },
      {
        name: 'Kolkata',
        theaters: [
          {
            name: 'INOX South City Mall',
            address: 'South City Mall, Kolkata, West Bengal',
            pricePerSeat: 220,
            seats: Array.from({ length: 50 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Parineeta', duration: '2h 30m', poster: 'src/assets/images/parineetha.jpg' },
              { title: 'Kahaani', duration: '2h 2m', poster: 'src/assets/images/kahaani.jpg' }
            ]
          },
          {
            name: 'Carnival Cinemas',
            address: 'Salt Lake, Kolkata, West Bengal',
            pricePerSeat: 200,
            seats: Array.from({ length: 45 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Detective Byomkesh Bakshy', duration: '2h 19m', poster: 'src/assets/images/byomkesh.jpg' },
              { title: 'Piku', duration: '2h 5m', poster: 'src/assets/images/piku.jpg' }
            ]
          }
        ]
      },
      {
        name: 'Pune',
        theaters: [
          {
            name: 'E-Square',
            address: 'University Road, Pune, Maharashtra',
            pricePerSeat: 190,
            seats: Array.from({ length: 50 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Tumbbad', duration: '1h 44m', poster: 'src/assets/images/tumbbad.jpg' },
              { title: 'Simmba', duration: '2h 39m', poster: 'src/assets/images/simmba.jpg' }
            ]
          },
          {
            name: 'City Pride',
            address: 'Kothrud, Pune, Maharashtra',
            pricePerSeat: 210,
            seats: Array.from({ length: 45 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Dhadak', duration: '2h 18m', poster: 'src/assets/images/dhadak.jpg' },
              { title: 'Andhadhun', duration: '2h 19m', poster: 'src/assets/images/andhadhun.jpg' }
            ]
          }
        ]
      },
      {
        name: 'Ahmedabad',
        theaters: [
          {
            name: 'Cinepolis',
            address: 'Alpha One Mall, Ahmedabad, Gujarat',
            pricePerSeat: 200,
            seats: Array.from({ length: 50 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Sanju', duration: '2h 41m', poster: 'src/assets/images/sanju.jpg' },
              { title: 'Raazi', duration: '2h 18m', poster: 'src/assets/images/raazi.jpg' }
            ]
          },
          {
            name: 'PVR Acropolis',
            address: 'Acropolis Mall, Ahmedabad, Gujarat',
            pricePerSeat: 220,
            seats: Array.from({ length: 50 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Uri', duration: '2h 18m', poster: 'src/assets/images/uri.jpg' },
              { title: 'Padmaavat', duration: '2h 43m', poster: 'src/assets/images/padmavat.jpg' }
            ]
          }
        ]
      },
      {
        name: 'Jaipur',
        theaters: [
          {
            name: 'Raj Mandir',
            address: 'C-16, Panch Batti, Jaipur, Rajasthan',
            pricePerSeat: 180,
            seats: Array.from({ length: 50 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Padman', duration: '2h 20m', poster: '/assets/images/padman.jpg' },
              { title: 'Badhaai Ho', duration: '2h 4m', poster: '/assets/images/badhaaiho.jpg' }
            ]
          },
          {
            name: 'Inox Pink Square',
            address: 'Pink Square Mall, Jaipur, Rajasthan',
            pricePerSeat: 200,
            seats: Array.from({ length: 50 }, (_, i) => `Seat ${i + 1}`),
            movies: [
              { title: 'Article 15', duration: '2h 10m', poster: '/assets/images/article15.jpg' },
              { title: 'Dream Girl', duration: '2h 12m', poster: '/assets/images/dreamgirl.jpg' }
            ]
          }
        ]
      }
    ]
  };
  
  export default data;
  
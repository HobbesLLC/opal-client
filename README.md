# OPAL

Opal is a free web tool for creating fully customized animated JSON iconsets. This project was a collaboration with [Hobbes](https://www.hobbes.work) to allow developers and designers to customize a set of animated icons. The icons were created in Adobe After Effects by Hobbes and exported as JSON using [Bodymovin](https://exchange.adobe.com/creativecloud.details.12557.bodymovin.html).

## Features

- Users can adjust the color (hue, saturation, & light) by adjusting input ranges or by entering a Hex code. Scale, stroke, & duration can also be adjusted
  - The Hex code will be translated to
- These values are stored in state, and sent to the API
- The API receives these values, validates them, and applies them to a copy of these files copied from a PostgreSQL database.
- The files are returned to the client, packaged using JSZip and downloaded. The download includes a directory for Animated & Static icons.

## Deployment

The frontend is hosted with [Vercel](https://vercel.com). The backend API & Database are hosted with [Heroku](https://heroku.com)

## Built With

- [React](https://reactjs.org/) - The web framework used for the frontend
- [Express](https://expressjs.com/) - The web framework used for the backend API
- [Lottie](https://airbnb.io/lottie/#/) - Used to animate SVG icons
- [JSZip](https://stuk.github.io/jszip/) - Used to package JSON icons

## Authors

- **Lucas Vocos** - _Web Developer_ - [Github](https://github.com/lucasvocos)
- **Dan Stack** - _Motion Designer_ - [Portfolio](https://www.danrstack.com/)

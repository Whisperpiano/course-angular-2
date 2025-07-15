# GIFs App

A modern Angular application for browsing and searching GIFs. This project was created as part of an Angular course.

## Features

- Browse trending GIFs
- Search for GIFs by keywords
- Responsive design with Tailwind CSS
- Lazy-loaded modules for optimal performance

## Tech Stack

- Angular 20.1.0
- RxJS
- Tailwind CSS 4.1.11
- TypeScript 5.8.2

## Project Structure

```
src/
├── app/
│   ├── auth/           # Authentication components
│   ├── gifs/           # Main GIF functionality
│   │   ├── components/  # Reusable GIF components
│   │   ├── interfaces/  # TypeScript interfaces
│   │   ├── pages/       # Page components
│   │   └── services/    # API and state services
│   └── shared/         # Shared components across the app
```

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd gifs-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Navigate to `http://localhost:4200/`

## Building for Production

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Tests

Run `npm test` to execute the unit tests via Karma.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- This project was created as part of an Angular course
- GIFs are loaded through a third-party API
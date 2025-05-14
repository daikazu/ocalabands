# Development Guidelines for Ocala Bands Project

This document provides guidelines and instructions for developing and maintaining the Ocala Bands project.

## Build/Configuration Instructions

### Prerequisites
- PHP 8.4 or higher
- Composer
- Node.js and npm/bun
- MySQL or SQLite (for local development)

### Initial Setup
1. Clone the repository
2. Install PHP dependencies:
   ```bash
   composer install
   ```
3. Install JavaScript dependencies:
   ```bash
   npm install
   # or if using bun
   bun install
   ```
4. Create a copy of the environment file:
   ```bash
   cp .env.example .env
   ```
5. Generate an application key:
   ```bash
   php artisan key:generate
   ```
6. Set up the database in the `.env` file
7. Run migrations:
   ```bash
   php artisan migrate
   ```
8. Link the storage directory:
   ```bash
   php artisan storage:link
   ```

### Development Server
To start the development server, you can use the following command:
```bash
composer dev
```

This will concurrently run:
- Laravel queue worker
- Laravel Pail (for logs)
- Vite development server

Alternatively, you can run each service separately:
```bash
# For Vite (frontend assets)
npm run dev
# or
bun run dev

# For Laravel server
php artisan serve
```

### Building for Production
To build the frontend assets for production:
```bash
npm run build
# or
bun run build
```

## Testing Information

### Testing Framework
This project uses [Pest PHP](https://pestphp.com/) for testing, which is a testing framework built on top of PHPUnit with a more expressive syntax.

### Test Structure
Tests are organized into two main directories:
- `tests/Unit/`: For unit tests that test individual components in isolation
- `tests/Feature/`: For feature tests that test the application as a whole

### Running Tests
To run all tests:
```bash
./vendor/bin/pest
```

To run a specific test file:
```bash
./vendor/bin/pest tests/path/to/test/file.php
```

To run tests with coverage report:
```bash
./vendor/bin/pest --coverage
```

### Writing Tests
Here's an example of how to write a simple test using Pest:

```php
<?php

test('string concatenation works correctly', function () {
    $string1 = 'Hello';
    $string2 = 'World';
    
    expect($string1 . ' ' . $string2)->toBe('Hello World');
});

test('array operations work correctly', function () {
    $array = [1, 2, 3];
    
    expect($array)->toHaveCount(3);
    expect($array)->toContain(2);
    expect(array_sum($array))->toBe(6);
});
```

For more complex tests, you can use Laravel's testing helpers:

```php
test('home page returns a successful response', function () {
    $response = $this->get('/');
    
    $response->assertStatus(200);
});
```

## Code Style and Development Guidelines

### Code Style
This project uses [Laravel Pint](https://github.com/laravel/pint) for code style enforcement, which is a wrapper around PHP-CS-Fixer. The configuration is in the `pint.json` file.

To format your code according to the project's style:
```bash
./vendor/bin/pint
```

The project also uses Prettier for formatting JavaScript, CSS, and Blade files:
```bash
npm run format
# or
bun run format
```

### Static Analysis
The project uses [Larastan](https://github.com/larastan/larastan) for static analysis:
```bash
./vendor/bin/phpstan analyse
```

### Automated Refactoring
The project uses [Rector](https://github.com/rectorphp/rector) for automated refactoring:
```bash
./vendor/bin/rector process
```

### Frontend
The project uses:
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for asset bundling
- [Livewire](https://livewire.laravel.com/) for dynamic interfaces

### Recommended Development Workflow
1. Pull the latest changes from the repository
2. Create a new branch for your feature or bug fix
3. Make your changes
4. Run tests to ensure everything works
5. Format your code using Pint and Prettier
6. Run static analysis to catch potential issues
7. Commit your changes with a descriptive message
8. Push your branch and create a pull request

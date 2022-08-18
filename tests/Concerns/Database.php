<?php

namespace Tests\Concerns;

trait Database
{
    protected string $database = 'testing';

    protected string $table = 'foo_actions';

    protected function setDatabase($app): void
    {
        $app['config']->set('database.default', $this->database);
        $app['config']->set('database.actions', $this->table);

        $app['config']->set('database.connections.' . $this->database, [
            'driver'   => 'sqlite',
            'database' => ':memory:',
            'prefix'   => '',
        ]);
    }

    protected function freshDatabase(): void
    {
        $this->refreshDatabase();
        $this->loadMigrations();

        $this->artisan('migrate')->run();
    }

    protected function loadMigrations(): void
    {
        $this->allowAnonymousMigrations()
            ? $this->loadMigrationsFrom(__DIR__ . '/../fixtures/migrations/anonymous')
            : $this->loadMigrationsFrom(__DIR__ . '/../fixtures/migrations/named');
    }
}

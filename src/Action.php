<?php

namespace DragonCode\LaravelActions;

use DragonCode\LaravelActions\Concerns\Artisan;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Arr;

abstract class Action extends Migration
{
    use Artisan;

    /**
     * Determines the type of launch of the action.
     *
     * If true, then it will be executed once.
     * If false, then the action will run every time the `actions` command is invoked.
     *
     * @var bool
     */
    protected bool $once = true;

    /**
     * Determines a call to database transactions.
     *
     * By default, false.
     *
     * @var bool
     */
    protected bool $transactions = false;

    /**
     * The number of attempts to execute a request within a transaction before throwing an error.
     *
     * @var int
     */
    protected int $transactionAttempts = 1;

    /**
     * Determines which environment to run on.
     *
     * @var array|string|null
     */
    protected string|array|null $environment = null;

    /**
     * Determines in which environment it should not run.
     *
     * @var array|string|null
     */
    protected string|array|null $exceptEnvironment = null;

    /**
     * Defines a possible "pre-launch" of the action.
     *
     * @var bool
     */
    protected bool $before = true;

    /**
     * Determines the type of launch of the action.
     *
     * If true, then it will be executed once.
     * If false, then the action will run every time the `actions` command is invoked.
     *
     * @return bool
     */
    public function isOnce(): bool
    {
        return $this->once;
    }

    /**
     * Determines a call to database transactions.
     *
     * @return bool
     */
    public function enabledTransactions(): bool
    {
        return $this->transactions;
    }

    /**
     * The number of attempts to execute a request within a transaction before throwing an error.
     *
     * @return int
     */
    public function transactionAttempts(): int
    {
        return $this->transactionAttempts;
    }

    /**
     * Determines which environment to run on.
     *
     * @return array
     */
    public function onEnvironment(): array
    {
        return Arr::wrap($this->environment);
    }

    /**
     * Determines in which environment it should not run.
     *
     * @return array
     */
    public function exceptEnvironment(): array
    {
        return Arr::wrap($this->exceptEnvironment);
    }

    /**
     * Determines whether the given action can be called conditionally.
     *
     * @return bool
     */
    public function allow(): bool
    {
        return true;
    }

    /**
     * Defines a possible "pre-launch" of the action.
     *
     * @return bool
     */
    public function hasBefore(): bool
    {
        return $this->before;
    }

    /**
     * Method to be called when the job completes successfully.
     *
     * @return void
     */
    public function success(): void
    {
    }

    /**
     * The method will be called if an error occurs.
     *
     * @return void
     */
    public function failed(): void
    {
    }
}

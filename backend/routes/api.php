<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\SousCategorieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get("/categories", [CategorieController::class, "index"]);
Route::post("/categories", [CategorieController::class, "store"]);
Route::get("/categories/{id}", [CategorieController::class, "show"]);
Route::delete("/categories/{id}", [CategorieController::class, "destroy"]);
Route::put("/categories/{id}", [CategorieController::class, "update"]);

Route::get("/scategories", [SousCategorieController::class, "index"]);
Route::post("/scategories", [SousCategorieController::class, "store"]);
Route::get("/scategories/{id}", [SousCategorieController::class, "show"]);
Route::delete("/scategories/{id}", [SousCategorieController::class, "destroy"]);
Route::put("/scategories/{id}", [SousCategorieController::class, "update"]);
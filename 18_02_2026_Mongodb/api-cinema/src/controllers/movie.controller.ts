import { Request, Response } from "express";
import Movie from "../models/movie.model";

// GET tous les films
export const getAllMovies = async (req: Request, res: Response): Promise<void> => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// GET un film par ID
export const getMovieById = async (req: Request, res: Response): Promise<void> => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({ message: "Movie not found" });
        }
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// POST créer un nouveau film
export const createMovie = async (req: Request, res: Response): Promise<void> => {
    try {
        const newMovie = new Movie(req.body);
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

// PUT mettre à jour un film
export const updateMovie = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedMovie) {
            res.json(updatedMovie);
        } else {
            res.status(404).json({ message: "Movie not found" });
        }
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

// DELETE supprimer un film
export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (deletedMovie) {
            res.json({ message: "Movie deleted" });
        } else {
            res.status(404).json({ message: "Movie not found" });
        }
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
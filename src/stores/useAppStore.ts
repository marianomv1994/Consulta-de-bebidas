import { create } from 'zustand'
import {devtools} from 'zustand/middleware'
import { createrecipesSlice, type recipesSliceType } from './recipeSlice'
import { createFavoritesSlice, type FavoritesSliceType } from './favoritesSlice'
import { createNotificationslice ,type NotificationSliceType } from './notificationSlice'


export const useAppStore = create<recipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools( (...a) => ({

    ...createrecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationslice(...a),
    
})))

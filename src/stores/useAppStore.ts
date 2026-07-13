import { create } from 'zustand'
import {devtools} from 'zustand/middleware'
import { createrecipesSlice, type recipesSliceType } from './recipeSlice'
import { createFavoritesSlice, type FavoritesSliceType } from './favoritesSlice'
import { createNotificationslice ,type NotificationSliceType } from './notificationSlice'
import { createAISlice, type AISlice } from './aiSlice'


export const useAppStore = create<recipesSliceType & FavoritesSliceType & NotificationSliceType &AISlice>()(devtools( (...a) => ({

    ...createrecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationslice(...a),
    ...createAISlice(...a)
    
})))

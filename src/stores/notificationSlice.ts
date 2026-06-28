import type { StateCreator} from 'zustand'
import type { FavoritesSliceType } from './favoritesSlice'

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text'| 'error'>) => void
    hideNotificacion: () => void
}

export const createNotificationslice : StateCreator<NotificationSliceType &FavoritesSliceType, [], [], NotificationSliceType> = (set, get) => ({

    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            get().hideNotificacion()
        }, 4000);
    },
    hideNotificacion: () => {
        set({
            notification: {
                text: '',
                error: false,
                show: false
            },

        })

    }
})

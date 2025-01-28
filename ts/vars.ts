import _eventsData from '../events.json'
import { IEvent } from './interfaces/IEvent'

export const timeP = document.querySelector('.time') as HTMLParagraphElement

export const yearP = document.querySelector('.year') as HTMLParagraphElement

export const eventsData = _eventsData as IEvent[]

export const events = document.querySelector('.events') as HTMLDivElement

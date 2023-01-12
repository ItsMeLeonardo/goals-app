import { createContext, useReducer } from 'react'

import type {
	FormShare,
	ProviderProps,
	Action,
	FileAction,
	FormShareContextType,
} from 'components/Pages/Share/types'
import type { AutocompleteItem } from 'components/Pages/Share/AutocompleteTag/types'

import { ActionKind } from 'components/Pages/Share/types'

const initialState: FormShare = {
	title: '',
	url: '',
	tags: [],
}

const initialValue: FormShareContextType = {
	state: initialState,
	setImage: () => {},
	setTitle: () => {},
	setUrl: () => {},
	setTags: () => {},
	reset: () => {},
}

export const FormShareContext = createContext<FormShareContextType>(initialValue)

const formReducer = (state: FormShare, action: Action | FileAction): FormShare => {
	const { payload, type } = action

	switch (type) {
		case ActionKind.setTitle:
			if (typeof payload === 'string') {
				return { ...state, title: payload }
			}
			return state
		case ActionKind.setUrl:
			if (typeof payload === 'string') {
				return { ...state, url: payload }
			}
			return state
		case ActionKind.setTags:
			if (payload instanceof Array) {
				return { ...state, tags: payload }
			}
			return state
		case ActionKind.setImage:
			return { ...state, image: payload }
		case ActionKind.reset:
			return initialState
	}
}

export function FormShareProvider({ children }: ProviderProps) {
	const [state, dispatch] = useReducer(formReducer, initialState)

	const setTitle = (title: string) => {
		dispatch({ type: ActionKind.setTitle, payload: title })
	}
	const setUrl = (url: string) => {
		dispatch({ type: ActionKind.setUrl, payload: url })
	}

	const setTags = (tags: AutocompleteItem[]) => {
		dispatch({ type: ActionKind.setTags, payload: tags })
	}

	const setImage = (image: File) => {
		dispatch({ type: ActionKind.setImage, payload: image })
	}

	const reset = () => {
		dispatch({ type: ActionKind.reset, payload: '' })
	}

	const value = {
		state,
		setTitle,
		setUrl,
		setTags,
		setImage,
		reset,
	}

	return <FormShareContext.Provider value={value}>{children}</FormShareContext.Provider>
}

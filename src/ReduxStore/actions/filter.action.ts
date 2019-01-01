import { Filter } from "../../Types/types";
// SET_TEXT_FILTER

export const setTextFilter = (filter: string = ""): Filter<string | undefined> => ({
    type: "SET_TEXT_FILTER",
    filter
})

// SORT_BY_DATE

export const sortByDate = (): Filter<null> => ({
    type: "SORT_BY_DATE"
})

// SORT_BY_AMOUNT

export const sortByAmount = (): Filter<null> => ({
    type: "SORT_BY_AMOUNT"
})

// SET_START_DATE
export const setStartDate = (filter: string | number = ""): Filter<string | number> => ({
    type: "SET_START_DATE",
    filter
})
// SET_END_DATE
export const setEndDate = (filter: string | number = ""): Filter<string | number> => ({
    type: "SET_END_DATE",
    filter
})
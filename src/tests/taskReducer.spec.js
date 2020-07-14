import tasksReducer from '../context/tasks/tasksReducer';

import {
    EDIT_TASK,
    INIT_ARRTASKS,
    REMOVE_TASK,
    ADD_TASK,
    SET_ERR,
}
    from '../context/types';

describe("tasksReducer", () => {
    describe("ADD_TASK", () => {
        it("ADD_TASK to empty array", () => {
            const initialState = { arrTasks: [], err: null };
            const taskList = tasksReducer(initialState, {
                type: ADD_TASK,
                payload: {
                    newTask: { id: 3, task: "eat", completed: false }
                }
            });
            expect(taskList).toEqual({ arrTasks: [{ id: 3, task: "eat", completed: false }], err: null });
        });
        it("ADD_TASK to non-empty array", () => {
            const initialState = { arrTasks: [{ task: "do homework", completed: false }] };
            const taskList = tasksReducer(initialState, {
                type: ADD_TASK,
                payload: {
                    newTask: { task: "eat", completed: false }
                }
            });
            expect(taskList).toEqual({ arrTasks: [{ task: "do homework", completed: false }, { task: "eat", completed: false }] });
        });
    });

    describe("INIT_ARRTASKS", () => {
        it("INIT_ARRTASKS", () => {
            const initialState = { arrTasks: [], err: null };
            const taskList = tasksReducer(initialState, {
                type: INIT_ARRTASKS,
                payload: {
                    arr: [{ id: 3, task: "do homework", completed: false }, { id: 4, task: "eat", completed: false }]
                }
            });
            expect(taskList).toEqual({ arrTasks: [{ id: 3, task: "do homework", completed: false }, { id: 4, task: "eat", completed: false }], err: null });
        })
    });
    describe("REMOVE_TASK", () => {
        it("REMOVE_TASK", () => {
            const initialState = {
                arrTasks: [

                    { id: 1, task: "do homework", completed: false },
                    { id: 3, task: "eat", completed: false },
                    { id: 7, task: "laundry", completed: false }

                ],
                err: null,
            };
            const taskList = tasksReducer(initialState, {
                type: REMOVE_TASK,
                payload: {
                    id: 3,
                }
            });
            expect(taskList).toEqual({ arrTasks: [{ id: 1, task: "do homework", completed: false }, { id: 7, task: "laundry", completed: false }], err: null });
        })
    });
    describe("EDIT_TASK", () => {
        it("EDIT_TASK at the front", () => {
            const initialState = {
                arrTasks: [

                    { id: 1, task: "do homework", completed: false },
                    { id: 3, task: "eat", completed: false },
                    { id: 7, task: "laundry", completed: false }

                ],
                err: null,
            };
            const taskList = tasksReducer(initialState, {
                type: EDIT_TASK,
                payload: {
                    index: 0,
                    editedTask: { id: 1, task: "do Math homework", completed: false },
                }
            });
            expect(taskList).toEqual({ arrTasks: [{ id: 1, task: "do Math homework", completed: false }, { id: 3, task: "eat", completed: false }, { id: 7, task: "laundry", completed: false }], err: null });

        })
        it("EDIT_TASK in the middle", () => {
            const initialState = {
                arrTasks: [

                    { id: 1, task: "do homework", completed: false },
                    { id: 3, task: "eat", completed: false },
                    { id: 7, task: "laundry", completed: false }

                ],
                err: null
            };
            const taskList = tasksReducer(initialState, {
                type: EDIT_TASK,
                payload: {
                    index: 1,
                    editedTask: { id: 3, task: "eat", completed: true },
                }
            });
            expect(taskList).toEqual({ arrTasks: [{ id: 1, task: "do homework", completed: false }, { id: 3, task: "eat", completed: true }, { id: 7, task: "laundry", completed: false }], err: null });

        })

        it("EDIT_TASK at the end", () => {
            const initialState = {
                arrTasks: [

                    { id: 1, task: "do homework", completed: false },
                    { id: 3, task: "eat", completed: false },
                    { id: 7, task: "laundry", completed: false }

                ],
                err: null,
            };
            const taskList = tasksReducer(initialState, {
                type: EDIT_TASK,
                payload: {
                    index: 2,
                    editedTask: { id: 7, task: "laundry", completed: true },
                }
            });
            expect(taskList).toEqual({ arrTasks: [{ id: 1, task: "do homework", completed: false }, { id: 3, task: "eat", completed: false }, { id: 7, task: "laundry", completed: true }], err: null });

        })
    });

    describe("SET_ERR", () => {
        it("SET_ERR returns error ", () => {
            const initialState = {
                arrTasks: [

                    { id: 1, task: "do homework", completed: false },
                    { id: 3, task: "eat", completed: false },
                    { id: 7, task: "laundry", completed: false }

                ],
                err: null,
            };
            const taskList = tasksReducer(initialState, {
                type: SET_ERR,
                payload: {
                    error: "There is an error."
                }
            });
            expect(taskList).toEqual({ arrTasks: [{ id: 1, task: "do homework", completed: false }, { id: 3, task: "eat", completed: false }, { id: 7, task: "laundry", completed: false }], err: "There is an error." });

        })
    })

});

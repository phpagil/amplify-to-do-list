export const getDate = () => {
    /** Calculate today's date to show */
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    }
    return today.toLocaleDateString('en-us', options);
}
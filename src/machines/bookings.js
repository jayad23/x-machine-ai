import { createMachine, assign } from "xstate";
const fetchCountries = () =>
  fetch('https://restcountries.com/v3.1/region/ame')
    .then((response) => response.json()); 

const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: () => fetchCountries,
        onDone: {
          target: 'success',
          actions: assign({
            countries: (context, event) => event.data,
          })
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: 'Fallo el request',
          })
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};


export const bookings = createMachine({
  id: "bookings",
  initial: "start",
  context: {
    destination: "",
    passengers: null,
    dates: null,
    namesOfPassengers: [],
    numberOfPassengers: null,
  },
  states: {
    start: {
      on: {
        START: "search",
      },
    },
    search: {
      on: {
        CONTINUE: {
          target: "tickets",
          actions: assign({
            destination: (context, event) => console.log(event)
          }),
          
        },
        CANCEL: "start",
      },
      ...fillCountries,
    },
    tickets: {
      on: {
        FINISH: {
          target: "passengers",
          actions: assign(
            (context, event) => context.dates = [event.dates]
          )
        },
        CANCEL: "start",
        BACK: "search",
      },
    },
    passengers: {
      on: {
        BUY: {
          target: "success",
          actions: assign(
            (context, event) => context.namesOfPassengers = event.names
          )
        },
        BACK: "tickets",
        CANCEL: "start",
      },
    },
    success: {
      on: {
        REFRESH: "start"
      },
    },
  },
}
);

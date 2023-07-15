import { useState } from "react";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
// import Message from "./components/message";
// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import Like from "./components/Like";
// import ExpandableText from "./components/ExpandableText";
// import Form from "./components/Form";

function App() {
  // const topCities = [
  //   "Tokyo, Japan",
  //   "New York City, United States",
  //   "London, United Kingdom",
  //   "Paris, France",
  //   "Moscow, Russia",
  //   "Istanbul, Turkey",
  //   "Dubai, United Arab Emirates",
  //   "Singapore",
  //   "Seoul, South Korea",
  //   "Barcelona, Spain",
  //   "Berlin, Germany",
  //   "Sydney, Australia",
  //   "Rio de Janeiro, Brazil",
  //   "Cape Town, South Africa",
  //   "Toronto, Canada",
  // ];

  // const [alertVisible, setAlertVisible] = useState(false);

  const expenses = [
    {
      id: 1,
      description: "Groceries",
      amount: 50,
      category: "Food",
    },
    {
      id: 2,
      description: "Gasoline",
      amount: 30,
      category: "Transportation",
    },
    {
      id: 3,
      description: "Movie tickets",
      amount: 15,
      category: "Entertainment",
    },
    {
      id: 4,
      description: "Restaurant dinner",
      amount: 60,
      category: "Food",
    },
    {
      id: 5,
      description: "Phone bill",
      amount: 50,
      category: "Utilities",
    },
  ];

  return (
    //   <>
    //     <Message />

    //     {alertVisible && (
    //       <Alert
    //         onClose={() => {
    //           setAlertVisible(false);
    //         }}
    //       >
    //         This is an alert
    //       </Alert>
    //     )}
    //     <Button color="primary" onClick={() => setAlertVisible(true)}>
    //       Click Me
    //     </Button>

    //    <ListGroup
    //       heading="Top Cities"
    //       items={topCities}
    //       onSelectItem={(item) => {
    //   console.log(item);
    // }}
    //     />

    //     <Like onSelect={() => console.log("clicked")} />
    //     <br />

    //     <ExpandableText maxChars={100}>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum
    //       animi illo pariatur, iusto dolore nesciunt ratione. Minus eveniet quos
    //       dignissimos delectus dolorem quaerat consequatur a ea quibusdam tempore.
    //       Nesciunt error aliquam dolorem maxime officiis voluptas molestias ut
    //       laborum eligendi dolor recusandae, quaerat voluptatibus. Reprehenderit
    //       repellat nemo deserunt dolor ab aliquid recusandae consequuntur nihil
    //       harum quae ipsum voluptates consectetur asperiores, ipsa, exercitationem
    //       alias. Illo, iure cupiditate dolorem voluptatum natus recusandae libero
    //       necessitatibus ipsum doloremque
    //     </ExpandableText>

    //     <Form></Form>
    //   </>

    // Expense Tracker
    <>
      <ExpenseList expenses={expenses} />
    </>
  );
}

export default App;

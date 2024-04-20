import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import RefForm from "./components/Forms/RefForm";
import ChangeForm from "./components/Forms/ChangeForm";
import UseForm from "./components/Forms/UseForm";
import ZodForm from "./components/Forms/ZodForm";

function App() {
  let items = [
    "Lahore",
    "Karachi",
    "Peshawer",
    "Rawalpindi",
    "Faisalabad",
    "Gojra",
    "Gujrawala",
  ];

  return (
    <>
      <div className="mb-5">
        <h2>Forms</h2>
        <div className="row mb-3">
          <div className="col">
            <h6>This form is working with Use Ref Hook</h6>
            <RefForm />
          </div>
          <div className="col">
            <h6>This form is working with OnChange event handling</h6>
            <ChangeForm />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <h6>This form is working with React UseForm hook</h6>
            <UseForm />
          </div>
          <div className="col">
            <h6>This form is working with React UseForm and Zod Validation</h6>
            <ZodForm />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <h2>Buttons</h2>
        <div className="col">
          <Button type="primary">Primary Button</Button>
        </div>
        <div className="col">
          <Button type="secondary">secondary Button</Button>
        </div>
        <div className="col">
          <Button type="danger">danger Button</Button>
        </div>
        <div className="col">
          <Button type="warning">warning Button</Button>
        </div>
        <div className="col">
          <Button type="success">success Button</Button>
        </div>
      </div>

      <ListGroup items={items} heading="Cities" />
    </>
  );
}

export default App;

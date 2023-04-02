import * as React from "react";
import Layout from "../../components/Layout";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <iframe
                title="test"
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=1&showNav=1&showDate=1&src=bmhsXzVfJTQ0ZXRyb2l0KyU1MmVkKyU1N2luZ3Mjc3BvcnRzQGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23E4C441"
                style={{ borderWidth: "1px" }}
                width="100%"
                height="600"
              />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

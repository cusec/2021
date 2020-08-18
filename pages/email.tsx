import Head from "next/head";

export default function Email() {
  return (
    <>
      <Head>
        <title>CUSEC 2021 Email Signature</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
      </Head>

      <table id="email-signature">
        <tbody>
          <tr>
            <td valign="middle" style={{ paddingRight: "12px" }}>
              <a
                href="https://2021.cusec.net"
                style={{ textDecoration: "none" }}
              >
                <img
                  src="/images/cusec-logo-light-background.png"
                  style={{ verticalAlign: "middle", width: "120px" }}
                  alt="CUSEC 2021"
                />
              </a>
            </td>
            <td
              style={{
                borderLeft: "2px solid whitesmoke",
                paddingLeft: "12px",
              }}
            >
              <table id="inner-table">
                <tbody>
                  <tr style={{ fontSize: "15px" }}>
                    <td>
                      <b>Your Name</b>
                      <br />
                      <i>Your Title</i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Mobile</b>:{" "}
                      <a href="tel:+1(226)123-1245">+1 (226) 123-1245</a>
                      <br />
                      <b>Email</b>:{" "}
                      <a href="mailto:web@cusec.net">[REPLACE]@cusec.net</a>
                      <br />
                      <b>Website</b>:{" "}
                      <a href="https://2021.cusec.net">2021.cusec.net</a>
                    </td>
                  </tr>
                  <tr>
                    <td id="icons" style={{ padding: "5px 0px 0px 0px" }}>
                      <a href="https://www.facebook.com/cusecofficial/">
                        <img alt="facebook" src="/images/facebook-icon.png" />
                      </a>
                      <a href="https://twitter.com/cusec">
                        <img alt="twitter" src="/images/twitter-icon.png" />
                      </a>

                      <a href="https://www.linkedin.com/company/cusec/">
                        <img alt="linkedin" src="/images/linkedin-icon.png" />
                      </a>
                      <a href="https://www.youtube.com/channel/UCZ7j8F6h1CxD-uC0od9rHBw">
                        <img alt="youtube" src="/images/youtube-icon.png" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        table {
          border-collapse: separate;
          border-spacing: 2px;
        }

        #email-signature {
          color: #3b393b;
          font-family: sans-serif;
          font-size: 13px;
          margin: 8px;
          line-height: initial;
        }

        #inner-table tr {
          margin-bottom: 12px;
        }

        a {
          color: #3b393b;
          text-decoration: none;
        }

        #icons a img {
          display: initial;
          height: 18px;
          margin-right: 12px;
        }
      `}</style>
    </>
  );
}

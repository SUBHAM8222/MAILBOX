import "./WelcomePage.css";
import DrafJs from "./Editor/Editor";
import { useEffect, useState } from "react";
import Inbox from "./Editor/Inbox/Inbox";
import { outboxemailsliceactions } from "../Store/reduxslice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { sentboxmailsliceactions } from "../Store/reduxslice";
import Outbox from "./Editor/Inbox/outbox";

const WelcomePage = () => {
  const email = localStorage.getItem("EMAIL");
  const dispatch = useDispatch();
  const [mail, setmail] = useState(false);
  const [inbox, showinbox] = useState(false);
  const [eff, effect] = useState(false);
  const [otbox, setotbox] = useState();
  useEffect(() => {
    async function xyz() {
      const response = await axios.get(
        `https://mailbox-react-default-rtdb.firebaseio.com/email/${email}.json`
      );
      const data = response.data;
      let xyz = [];
      for (const key in data) {
        const x = data[key].data;
        const id = key;
        const EM = data[key].email;

        console.log(x);
        const y = JSON.parse(x);
        console.log(y);
        const z = y.blocks[0].text;
        xyz.push({ data: z, email: EM, id: id });
      }
      dispatch(outboxemailsliceactions.emailreceive(xyz));
    }

    xyz();
  }, [eff]);

  const showhandler = () => {
    setmail((state) => !state);
    showinbox(false);
  };

  const Fetchdatahandler = () => {
    setmail(false);
    showinbox((state) => !state);
    effect((state) => !state);
  };

  const deletehandler = (id) => {
    axios.delete(
      `https://mailbox-react-default-rtdb.firebaseio.com/email/email/${email}/${id}.json`
    );
  };

  const sentdatahandler = async () => {
    setotbox((state) => !state);
    const results = await axios.get(
      "https://mailbox-react-default-rtdb.firebaseio.com/email.json"
    );
    console.log(results);
    const data = await results.data;
    console.log(data);
    const edata = localStorage.getItem("EMAIL");
    const qwer = [];
    for (const key in data) {
      const x = data[key];
      for (const key in x) {
        const y = x[key];

        const z = y.data;

        const vk = y.email;

        const w = JSON.parse(z);

        const k = w.blocks[0].text;
        if (vk == edata) {
          qwer.push({ email: key, data: k });
        }
      }
    }
    dispatch(sentboxmailsliceactions.emailsent(qwer));
  };

  return (
    <div>
      <div className="style">
        <strong>WElCOME TO MAILBOX </strong>
      </div>
      <button onClick={showhandler}>Compose MAIL</button>
      <button onClick={Fetchdatahandler}>INBOX</button>
      <button onClick={sentdatahandler}>sentbox</button>
      {mail && <DrafJs />}
      {inbox && <Inbox delete={deletehandler} />}
      {otbox && <Outbox />}
    </div>
  );
};

export default WelcomePage;

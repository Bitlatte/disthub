import App from "./config/express.conf";
import { port } from "./config/env.conf";

App.listen(port, () => {
  console.log(`Server hosted on port ${port}`);
});

import { createApplication } from "graphql-modules";
import { transactions } from "../../presentation/modules-squema/transaction";


export const application = createApplication({
  modules: [transactions],
})
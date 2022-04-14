import { createApplication } from "graphql-modules";
import { transactions } from "../prisma/modules-squema/transaction";

export const application = createApplication({
  modules: [transactions],
})
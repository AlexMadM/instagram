import { combineSlices, configureStore, Store } from '@reduxjs/toolkit'

import {inctagramApi} from "@/app/services/inctagram.service";
import {Context, createWrapper} from "next-redux-wrapper";


// create a makeStore function
 export const store=
    configureStore({
      reducer: combineSlices( inctagramApi),
      middleware: getDefaultMiddleware =>
          getDefaultMiddleware().concat(inctagramApi.middleware),
    })

// export an assembled wrapper


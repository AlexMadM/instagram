import { combineSlices, configureStore, Store } from '@reduxjs/toolkit'

import {inctagramApi} from "@/app/services/inctagramApi";
import {Context, createWrapper} from "next-redux-wrapper";
import {inctagramService} from "@/app/services/inctagram.service";


// create a makeStore function
 export const store=
    configureStore({
      reducer: combineSlices( inctagramService),
      middleware: getDefaultMiddleware =>
          getDefaultMiddleware().concat(inctagramService.middleware),
    })

// export an assembled wrapper


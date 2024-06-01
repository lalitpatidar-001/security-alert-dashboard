import { createSlice } from "@reduxjs/toolkit";
import { security_data } from "../../data";

const initialState = {
    totalAlerts: 122,
    catagories: [],
    noOfPortAffected: [],
    srcIp: [],
    typeOfAttack: [],
    highestSeverity: 0,
}

const overviewSlice = createSlice({
    name: "overview",
    initialState,
    reducers: {
        addOverviewData: (state, action) => {
            security_data.map((item) => {
                state.totalAlerts = security_data.length;
                state.catagories = state.catagories.includes(item.alert?.category) ? state.catagories : [...state.catagories, item.alert?.category];

                state.noOfPortAffected = state.noOfPortAffected.includes(item.dest_port) ? state.noOfPortAffected : [...state.noOfPortAffected, item.dest_port];

                state.typeOfAttack = state.typeOfAttack.includes(item.alert?.signature) ? state.typeOfAttack : [...state.typeOfAttack, item.alert?.signature];

                state.srcIp = state.srcIp.includes(item.src_ip) ? state.srcIp : [...state.srcIp, item.src_ip];

                state.highestSeverity = state.highestSeverity< item.alert?.severity ? item.alert?.severity : state.highestSeverity


            })
        }
    }
});

export const {
    addOverviewData
} = overviewSlice.actions;

export default overviewSlice.reducer;
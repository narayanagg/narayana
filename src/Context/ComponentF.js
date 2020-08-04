import React from "react";
import { Usercontext, Channelcontext } from "../App";

function ComponentF() {
  return (
    <div>
      <Usercontext.Consumer>
        {(user) => {
          return (
            <Channelcontext.Consumer>
              {(channel) => {
                return (
                  <div>
                    user context value {user} ans {channel}
                  </div>
                );
              }}
            </Channelcontext.Consumer>
          );
        }}
      </Usercontext.Consumer>
    </div>
  );
}

export default ComponentF;

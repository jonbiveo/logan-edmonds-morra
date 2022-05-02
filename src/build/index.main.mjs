// Automatically generated with Reach 0.1.10 (9f925e05)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (9f925e05)';
export const _backendVersion = 14;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v318 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v319 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v319, v318],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:59:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v319, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v323, v324], secs: v326, time: v325, didSend: v31, from: v322 } = txn1;
      
      sim_r.txns.push({
        amt: v323,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v335 = stdlib.add(v325, v324);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v323, v324], secs: v326, time: v325, didSend: v31, from: v322 } = txn1;
  ;
  const v335 = stdlib.add(v325, v324);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v335],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v322, v323, v324, v335],
      evt_cnt: 0,
      funcNum: 2,
      lct: v325,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v535, time: v534, didSend: v286, from: v533 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v323,
          kind: 'from',
          to: v322,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v535, time: v534, didSend: v286, from: v533 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:51:29:application',
      fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:67:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v341, time: v340, didSend: v40, from: v339 } = txn2;
    const v343 = stdlib.add(v323, v323);
    ;
    let v344 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v345 = v340;
    let v352 = v343;
    
    while (await (async () => {
      const v360 = stdlib.eq(v344, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v360;})()) {
      const v367 = stdlib.add(v345, v324);
      const v371 = stdlib.protect(ctc0, await interact.getFinger(), {
        at: './index.rsh:75:43:application',
        fs: ['at ./index.rsh:74:15:application call to [unknown function] (defined at: ./index.rsh:74:19:function exp)'],
        msg: 'getFinger',
        who: 'Alice'
        });
      const v372 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:76:48:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:74:15:application call to [unknown function] (defined at: ./index.rsh:74:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v373 = stdlib.digest(ctc1, [v372, v371]);
      const v375 = stdlib.protect(ctc0, await interact.getGuess(v371), {
        at: './index.rsh:78:40:application',
        fs: ['at ./index.rsh:74:15:application call to [unknown function] (defined at: ./index.rsh:74:19:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v376 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:79:58:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:74:15:application call to [unknown function] (defined at: ./index.rsh:74:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v377 = stdlib.digest(ctc1, [v376, v375]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v322, v323, v324, v339, v352, v367, v373, v377],
        evt_cnt: 2,
        funcNum: 4,
        lct: v345,
        onlyIf: true,
        out_tys: [ctc2, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:82:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v380, v381], secs: v383, time: v382, didSend: v72, from: v379 } = txn3;
          
          ;
          const v384 = stdlib.addressEq(v322, v379);
          ;
          const v391 = stdlib.add(v382, v324);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v367],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v322, v323, v324, v339, v352, v367],
          evt_cnt: 0,
          funcNum: 5,
          lct: v345,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v501, time: v500, didSend: v237, from: v499 } = txn4;
            
            ;
            const v502 = stdlib.addressEq(v322, v499);
            const v503 = stdlib.addressEq(v339, v499);
            const v504 = v502 ? true : v503;
            ;
            sim_r.txns.push({
              amt: v352,
              kind: 'from',
              to: v339,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v501, time: v500, didSend: v237, from: v499 } = txn4;
        ;
        const v502 = stdlib.addressEq(v322, v499);
        const v503 = stdlib.addressEq(v339, v499);
        const v504 = v502 ? true : v503;
        stdlib.assert(v504, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:83:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:51:29:application',
          fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:83:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v380, v381], secs: v383, time: v382, didSend: v72, from: v379 } = txn3;
        ;
        const v384 = stdlib.addressEq(v322, v379);
        stdlib.assert(v384, {
          at: './index.rsh:82:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v391 = stdlib.add(v382, v324);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v391],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v322, v323, v324, v339, v352, v380, v391],
            evt_cnt: 0,
            funcNum: 7,
            lct: v382,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v483, time: v482, didSend: v203, from: v481 } = txn5;
              
              ;
              const v484 = stdlib.addressEq(v322, v481);
              const v485 = stdlib.addressEq(v339, v481);
              const v486 = v484 ? true : v485;
              ;
              sim_r.txns.push({
                amt: v352,
                kind: 'from',
                to: v322,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v483, time: v482, didSend: v203, from: v481 } = txn5;
          ;
          const v484 = stdlib.addressEq(v322, v481);
          const v485 = stdlib.addressEq(v339, v481);
          const v486 = v484 ? true : v485;
          stdlib.assert(v486, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:95:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:51:29:application',
            fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:95:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v398, v399], secs: v401, time: v400, didSend: v84, from: v397 } = txn4;
          ;
          const v402 = stdlib.addressEq(v339, v397);
          stdlib.assert(v402, {
            at: './index.rsh:94:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v409 = stdlib.add(v400, v324);
          const txn5 = await (ctc.sendrecv({
            args: [v322, v323, v324, v339, v352, v380, v398, v399, v409, v372, v371, v376, v375],
            evt_cnt: 4,
            funcNum: 8,
            lct: v400,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:102:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v414, v415, v416, v417], secs: v419, time: v418, didSend: v96, from: v413 } = txn5;
              
              ;
              const v420 = stdlib.addressEq(v322, v413);
              ;
              const v421 = stdlib.digest(ctc1, [v414, v415]);
              const v422 = stdlib.digestEq(v380, v421);
              ;
              const v429 = stdlib.add(v418, v324);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v409],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v322, v323, v324, v339, v352, v380, v398, v399, v409],
              evt_cnt: 0,
              funcNum: 9,
              lct: v400,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v465, time: v464, didSend: v169, from: v463 } = txn6;
                
                ;
                const v466 = stdlib.addressEq(v322, v463);
                const v467 = stdlib.addressEq(v339, v463);
                const v468 = v466 ? true : v467;
                ;
                sim_r.txns.push({
                  amt: v352,
                  kind: 'from',
                  to: v339,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v465, time: v464, didSend: v169, from: v463 } = txn6;
            ;
            const v466 = stdlib.addressEq(v322, v463);
            const v467 = stdlib.addressEq(v339, v463);
            const v468 = v466 ? true : v467;
            stdlib.assert(v468, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:103:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:51:29:application',
              fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:103:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v414, v415, v416, v417], secs: v419, time: v418, didSend: v96, from: v413 } = txn5;
            ;
            const v420 = stdlib.addressEq(v322, v413);
            stdlib.assert(v420, {
              at: './index.rsh:102:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v421 = stdlib.digest(ctc1, [v414, v415]);
            const v422 = stdlib.digestEq(v380, v421);
            stdlib.assert(v422, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:104:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v429 = stdlib.add(v418, v324);
            const v433 = stdlib.add(v415, v398);
            stdlib.protect(ctc3, await interact.seeWinningNumber(v433), {
              at: './index.rsh:109:32:application',
              fs: ['at ./index.rsh:107:15:application call to [unknown function] (defined at: ./index.rsh:107:19:function exp)'],
              msg: 'seeWinningNumber',
              who: 'Alice'
              });
            
            const txn6 = await (ctc.sendrecv({
              args: [v322, v323, v324, v339, v352, v398, v399, v415, v417, v429, v433],
              evt_cnt: 1,
              funcNum: 10,
              lct: v418,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:111:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v435], secs: v437, time: v436, didSend: v109, from: v434 } = txn6;
                
                ;
                const v438 = stdlib.addressEq(v322, v434);
                ;
                let v439;
                const v440 = stdlib.eq(v417, v399);
                if (v440) {
                  v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                else {
                  const v441 = stdlib.add(v415, v398);
                  const v442 = stdlib.eq(v441, v417);
                  if (v442) {
                    v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                    }
                  else {
                    const v444 = stdlib.eq(v441, v399);
                    if (v444) {
                      v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                      }
                    else {
                      v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    }
                  }
                const cv344 = v439;
                const cv345 = v436;
                const cv352 = v352;
                
                await (async () => {
                  const v344 = cv344;
                  const v345 = cv345;
                  const v352 = cv352;
                  
                  if (await (async () => {
                    const v360 = stdlib.eq(v344, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                    
                    return v360;})()) {
                    const v367 = stdlib.add(v345, v324);
                    sim_r.isHalt = false;
                    }
                  else {
                    const v517 = stdlib.eq(v344, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                    const v520 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:119:12:decimal', stdlib.UInt_max, '2'), v323);
                    const v522 = v517 ? v322 : v339;
                    sim_r.txns.push({
                      amt: v520,
                      kind: 'from',
                      to: v522,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v429],
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v322, v323, v324, v339, v352, v398, v399, v415, v417, v429],
                evt_cnt: 0,
                funcNum: 11,
                lct: v418,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v447, time: v446, didSend: v135, from: v445 } = txn7;
                  
                  ;
                  const v448 = stdlib.addressEq(v322, v445);
                  const v449 = stdlib.addressEq(v339, v445);
                  const v450 = v448 ? true : v449;
                  ;
                  sim_r.txns.push({
                    amt: v352,
                    kind: 'from',
                    to: v339,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v447, time: v446, didSend: v135, from: v445 } = txn7;
              ;
              const v448 = stdlib.addressEq(v322, v445);
              const v449 = stdlib.addressEq(v339, v445);
              const v450 = v448 ? true : v449;
              stdlib.assert(v450, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./index.rsh:112:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc3, await interact.informTimeout(), {
                at: './index.rsh:51:29:application',
                fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:112:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v435], secs: v437, time: v436, didSend: v109, from: v434 } = txn6;
              ;
              const v438 = stdlib.addressEq(v322, v434);
              stdlib.assert(v438, {
                at: './index.rsh:111:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              let v439;
              const v440 = stdlib.eq(v417, v399);
              if (v440) {
                v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v441 = stdlib.add(v415, v398);
                const v442 = stdlib.eq(v441, v417);
                if (v442) {
                  v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  const v444 = stdlib.eq(v441, v399);
                  if (v444) {
                    v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const cv344 = v439;
              const cv345 = v436;
              const cv352 = v352;
              
              v344 = cv344;
              v345 = cv345;
              v352 = cv352;
              
              continue;}
            
            }
          
          }
        
        }
      
      }
    const v517 = stdlib.eq(v344, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v520 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:119:12:decimal', stdlib.UInt_max, '2'), v323);
    const v522 = v517 ? v322 : v339;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v344), {
      at: './index.rsh:123:24:application',
      fs: ['at ./index.rsh:122:8:application call to [unknown function] (defined at: ./index.rsh:122:26:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v323, v324], secs: v326, time: v325, didSend: v31, from: v322 } = txn1;
  ;
  const v335 = stdlib.add(v325, v324);
  stdlib.protect(ctc1, await interact.acceptWager(v323), {
    at: './index.rsh:64:25:application',
    fs: ['at ./index.rsh:63:11:application call to [unknown function] (defined at: ./index.rsh:63:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v322, v323, v324, v335],
    evt_cnt: 0,
    funcNum: 1,
    lct: v325,
    onlyIf: true,
    out_tys: [],
    pay: [v323, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v341, time: v340, didSend: v40, from: v339 } = txn2;
      
      const v343 = stdlib.add(v323, v323);
      sim_r.txns.push({
        amt: v323,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v344 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v345 = v340;
      const v352 = v343;
      
      if (await (async () => {
        const v360 = stdlib.eq(v344, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v360;})()) {
        const v367 = stdlib.add(v345, v324);
        sim_r.isHalt = false;
        }
      else {
        const v517 = stdlib.eq(v344, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v520 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:119:12:decimal', stdlib.UInt_max, '2'), v323);
        const v522 = v517 ? v322 : v339;
        sim_r.txns.push({
          amt: v520,
          kind: 'from',
          to: v522,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v335],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v322, v323, v324, v335],
      evt_cnt: 0,
      funcNum: 2,
      lct: v325,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v535, time: v534, didSend: v286, from: v533 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v323,
          kind: 'from',
          to: v322,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v535, time: v534, didSend: v286, from: v533 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:51:29:application',
      fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:67:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v341, time: v340, didSend: v40, from: v339 } = txn2;
    const v343 = stdlib.add(v323, v323);
    ;
    let v344 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v345 = v340;
    let v352 = v343;
    
    while (await (async () => {
      const v360 = stdlib.eq(v344, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v360;})()) {
      const v367 = stdlib.add(v345, v324);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v367],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v322, v323, v324, v339, v352, v367],
          evt_cnt: 0,
          funcNum: 5,
          lct: v345,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v501, time: v500, didSend: v237, from: v499 } = txn4;
            
            ;
            const v502 = stdlib.addressEq(v322, v499);
            const v503 = stdlib.addressEq(v339, v499);
            const v504 = v502 ? true : v503;
            ;
            sim_r.txns.push({
              amt: v352,
              kind: 'from',
              to: v339,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v501, time: v500, didSend: v237, from: v499 } = txn4;
        ;
        const v502 = stdlib.addressEq(v322, v499);
        const v503 = stdlib.addressEq(v339, v499);
        const v504 = v502 ? true : v503;
        stdlib.assert(v504, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:83:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:51:29:application',
          fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:83:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v380, v381], secs: v383, time: v382, didSend: v72, from: v379 } = txn3;
        ;
        const v384 = stdlib.addressEq(v322, v379);
        stdlib.assert(v384, {
          at: './index.rsh:82:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v391 = stdlib.add(v382, v324);
        const v395 = stdlib.protect(ctc0, await interact.getFinger(), {
          at: './index.rsh:89:43:application',
          fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:17:function exp)'],
          msg: 'getFinger',
          who: 'Bob'
          });
        const v396 = stdlib.protect(ctc0, await interact.getGuess(v395), {
          at: './index.rsh:90:40:application',
          fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:17:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v322, v323, v324, v339, v352, v380, v391, v395, v396],
          evt_cnt: 2,
          funcNum: 6,
          lct: v382,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:94:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v398, v399], secs: v401, time: v400, didSend: v84, from: v397 } = txn4;
            
            ;
            const v402 = stdlib.addressEq(v339, v397);
            ;
            const v409 = stdlib.add(v400, v324);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v391],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v322, v323, v324, v339, v352, v380, v391],
            evt_cnt: 0,
            funcNum: 7,
            lct: v382,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v483, time: v482, didSend: v203, from: v481 } = txn5;
              
              ;
              const v484 = stdlib.addressEq(v322, v481);
              const v485 = stdlib.addressEq(v339, v481);
              const v486 = v484 ? true : v485;
              ;
              sim_r.txns.push({
                amt: v352,
                kind: 'from',
                to: v322,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v483, time: v482, didSend: v203, from: v481 } = txn5;
          ;
          const v484 = stdlib.addressEq(v322, v481);
          const v485 = stdlib.addressEq(v339, v481);
          const v486 = v484 ? true : v485;
          stdlib.assert(v486, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:95:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:51:29:application',
            fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:95:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v398, v399], secs: v401, time: v400, didSend: v84, from: v397 } = txn4;
          ;
          const v402 = stdlib.addressEq(v339, v397);
          stdlib.assert(v402, {
            at: './index.rsh:94:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v409 = stdlib.add(v400, v324);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v409],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v322, v323, v324, v339, v352, v380, v398, v399, v409],
              evt_cnt: 0,
              funcNum: 9,
              lct: v400,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v465, time: v464, didSend: v169, from: v463 } = txn6;
                
                ;
                const v466 = stdlib.addressEq(v322, v463);
                const v467 = stdlib.addressEq(v339, v463);
                const v468 = v466 ? true : v467;
                ;
                sim_r.txns.push({
                  amt: v352,
                  kind: 'from',
                  to: v339,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v465, time: v464, didSend: v169, from: v463 } = txn6;
            ;
            const v466 = stdlib.addressEq(v322, v463);
            const v467 = stdlib.addressEq(v339, v463);
            const v468 = v466 ? true : v467;
            stdlib.assert(v468, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:103:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:51:29:application',
              fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:103:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v414, v415, v416, v417], secs: v419, time: v418, didSend: v96, from: v413 } = txn5;
            ;
            const v420 = stdlib.addressEq(v322, v413);
            stdlib.assert(v420, {
              at: './index.rsh:102:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v421 = stdlib.digest(ctc3, [v414, v415]);
            const v422 = stdlib.digestEq(v380, v421);
            stdlib.assert(v422, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:104:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v429 = stdlib.add(v418, v324);
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v429],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v322, v323, v324, v339, v352, v398, v399, v415, v417, v429],
                evt_cnt: 0,
                funcNum: 11,
                lct: v418,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v447, time: v446, didSend: v135, from: v445 } = txn7;
                  
                  ;
                  const v448 = stdlib.addressEq(v322, v445);
                  const v449 = stdlib.addressEq(v339, v445);
                  const v450 = v448 ? true : v449;
                  ;
                  sim_r.txns.push({
                    amt: v352,
                    kind: 'from',
                    to: v339,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v447, time: v446, didSend: v135, from: v445 } = txn7;
              ;
              const v448 = stdlib.addressEq(v322, v445);
              const v449 = stdlib.addressEq(v339, v445);
              const v450 = v448 ? true : v449;
              stdlib.assert(v450, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./index.rsh:112:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:51:29:application',
                fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:112:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v435], secs: v437, time: v436, didSend: v109, from: v434 } = txn6;
              ;
              const v438 = stdlib.addressEq(v322, v434);
              stdlib.assert(v438, {
                at: './index.rsh:111:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              let v439;
              const v440 = stdlib.eq(v417, v399);
              if (v440) {
                v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v441 = stdlib.add(v415, v398);
                const v442 = stdlib.eq(v441, v417);
                if (v442) {
                  v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  const v444 = stdlib.eq(v441, v399);
                  if (v444) {
                    v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const cv344 = v439;
              const cv345 = v436;
              const cv352 = v352;
              
              v344 = cv344;
              v345 = cv345;
              v352 = cv352;
              
              continue;}
            
            }
          
          }
        
        }
      
      }
    const v517 = stdlib.eq(v344, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v520 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:119:12:decimal', stdlib.UInt_max, '2'), v323);
    const v522 = v517 ? v322 : v339;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v344), {
      at: './index.rsh:123:24:application',
      fs: ['at ./index.rsh:122:8:application call to [unknown function] (defined at: ./index.rsh:122:26:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAPAAFQIAgLeCgFCQIHWIgBMCYDAQABAQAiNQAxGEEF/SpkSSJbNQEhBFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQYMQAM3SSEJDEABV0mBCgxAAP1JIQUMQABWIQUSRCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AE49k2NbAyBjQDIQZbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCBRNIIQU0ARJENARJIhJMNAISEUQoZClkUEk1A0lJVwAgNf+BYFs1/oFwWzX9STUFFzX8gASni8ILNPwWULAyBjQDIQZbDEQ0/zEAEkQ0/TT+EkEABiM1+0IALDQDgWhbNAMhDFsISTX6NP0SQQAGIjX7QgASNPo0/hJBAAchCjX7QgADIzX7NP80AyVbNAMhB1s0A1cwIDT7MgY0AyRbQgQSSCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEogVmjrAyBjQDIQ1bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCBCBJIQsMQAEtSSEEDEAA00ghCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/JVs1/iEHWzX9VzAgNfwkWzX7IQZbNfqBgAFbNflJNQVJSiJbNfghBFs194EQWzX2gRhbNfWABH+iO1I0+BZQNPcWUDT2FlA09RZQsDIGNAMhDVsMRDT/MQASRDQDV1ggNPgWNPcWUAESRDIGNP0INfQ0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+RZQNPcWUDT1FlA09BZQKEsBVwB/ZylLAVd/AWdIIQU1ATIGNQJCA1tIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhBlsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IC7EghCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKVwAgNf8lWzX+IQdbNf1XMCA1/CRbNftXWCA1+kk1BUkiWzX5IQRbNfiABEohy/w0+RZQNPgWULAyBjQDIQZbDEQ0/DEAEkQyBjT9CDX3NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUDT3FlAoSwFXAH9nKUsBV38RZ0ghCTUBMgY1AkICY0khCgxAATJJgQQMQADrSSEIDEAAUEghCDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyEMWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgHiSCEINAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf4hB1s1/VcwIDX8JFs1+0k1BUlXACA1+lcgIDX5gARgXaQrNPpQNPlQsDIGNAMhDFsMRDT/MQASRDIGNP0INfg0/zT+FlA0/RZQNPxQNPsWUDT6UDT4FlAoSwFXAH9nKUsBV38BZ0ghCzUBMgY1AkIBaiEKEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ5bD0SxIrIBNAMlW7III7IQNANXACCyB7NCAQ5JIwxAAEdIIzQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEmouRdLAyBjQDIQ5bDEQ0/4gBMjQDVwAgNP80AyEHWzEAIzIGNP9JCEIAYEgiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBFs1/oAErNEfwzT/FlA0/hZQsIGgjQaIAOY0/4gA4TIGNP4INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIAfTX/Nf41/TX8Nfs1+jX5NP0jEkEALzT+NPsINfg0+TT6FlA0+xZQNPxQNP8WUDT4FlAoSwFXAGBnSCEINQEyBjUCQgA5sSKyASEKNPoLsggjshA0/DT5NP0iEk2yB7NCAAAxGSEIEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 144,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v323",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v324",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v323",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v324",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v380",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v381",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v416",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v417",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v380",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v381",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v416",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v417",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620021363803806200213683398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b611e17806200031f6000396000f3fe6080604052600436106100bd5760003560e01c80638e31476911610079578063bf2c5b2411610056578063bf2c5b2414610194578063cc923b29146101a7578063de736998146101ba578063ebdbfdcc146101cd57005b80638e3147691461014b578063ab53f2c61461015e578063b608682e1461018157005b80631e93b0f1146100c657806321642639146100ea5780632c10a159146100fd5780637eea518c1461011057806383230757146101235780638b9fadc81461013857005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100c46100f836600461185b565b6101e0565b6100c461010b366004611890565b61049b565b6100c461011e366004611890565b610632565b34801561012f57600080fd5b506001546100d7565b6100c4610146366004611890565b6107b0565b6100c4610159366004611890565b61094c565b34801561016a57600080fd5b50610173610aa6565b6040516100e19291906118ac565b6100c461018f366004611890565b610b43565b6100c46101a2366004611890565b610d7f565b6100c46101b5366004611909565b610f16565b6100c46101c8366004611890565b6111cb565b6100c46101db36600461185b565b611326565b6101f0600760005414601c61156a565b61020a8135158061020357506001548235145b601d61156a565b60008080556002805461021c9061191b565b80601f01602080910402602001604051908101604052809291908181526020018280546102489061191b565b80156102955780601f1061026a57610100808354040283529160200191610295565b820191906000526020600020905b81548152906001019060200180831161027857829003601f168201915b50505050508060200190518101906102ad91906119d6565b90506102c56040518060200160405280600081525090565b6102d68260c001514310601e61156a565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f3384604051610307929190611a74565b60405180910390a161031b3415601a61156a565b6060820151610336906001600160a01b03163314601b61156a565b60408201516103459043611abb565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c08401528582013560e0840152835161010084015260096000554360015590516104709183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b60405160208183030381529060405260029080519060200190610494929190611714565b5050505050565b6104ab600160005414600961156a565b6104c5813515806104be57506001548235145b600a61156a565b6000808055600280546104d79061191b565b80601f01602080910402602001604051908101604052809291908181526020018280546105039061191b565b80156105505780601f1061052557610100808354040283529160200191610550565b820191906000526020600020905b81548152906001019060200180831161053357829003601f168201915b50505050508060200190518101906105689190611ad3565b905061057b81606001514310600b61156a565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516105ac929190611b4c565b60405180910390a16105c581602001513414600861156a565b6105cd611798565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516001905251439201919091525161061b9080611abb565b60208201516040015261062d8161158f565b505050565b610642600160005414600d61156a565b61065c8135158061065557506001548235145b600e61156a565b60008080556002805461066e9061191b565b80601f016020809104026020016040519081016040528092919081815260200182805461069a9061191b565b80156106e75780601f106106bc576101008083540402835291602001916106e7565b820191906000526020600020905b8154815290600101906020018083116106ca57829003601f168201915b50505050508060200190518101906106ff9190611ad3565b90506107138160600151431015600f61156a565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610744929190611b4c565b60405180910390a16107583415600c61156a565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610795573d6000803e3d6000fd5b50600080805560018190556107ac906002906117f1565b5050565b6107c0600b60005414603661156a565b6107da813515806107d357506001548235145b603761156a565b6000808055600280546107ec9061191b565b80601f01602080910402602001604051908101604052809291908181526020018280546108189061191b565b80156108655780601f1061083a57610100808354040283529160200191610865565b820191906000526020600020905b81548152906001019060200180831161084857829003601f168201915b505050505080602001905181019061087d9190611b89565b9050610892816101200151431015603861156a565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a55033836040516108c3929190611b4c565b60405180910390a16108d73415603461156a565b805161090b906001600160a01b031633146109015760608201516001600160a01b03163314610904565b60015b603561156a565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610795573d6000803e3d6000fd5b61095c600560005414601761156a565b6109768135158061096f57506001548235145b601861156a565b6000808055600280546109889061191b565b80601f01602080910402602001604051908101604052809291908181526020018280546109b49061191b565b8015610a015780601f106109d657610100808354040283529160200191610a01565b820191906000526020600020905b8154815290600101906020018083116109e457829003601f168201915b5050505050806020019051810190610a199190611c1e565b9050610a2d8160a00151431015601961156a565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610a5e929190611b4c565b60405180910390a1610a723415601561156a565b805161090b906001600160a01b03163314610a9c5760608201516001600160a01b03163314610a9f565b60015b601661156a565b600060606000546002808054610abb9061191b565b80601f0160208091040260200160405190810160405280929190818152602001828054610ae79061191b565b8015610b345780601f10610b0957610100808354040283529160200191610b34565b820191906000526020600020905b815481529060010190602001808311610b1757829003601f168201915b50505050509050915091509091565b610b53600b60005414603161156a565b610b6d81351580610b6657506001548235145b603261156a565b600080805560028054610b7f9061191b565b80601f0160208091040260200160405190810160405280929190818152602001828054610bab9061191b565b8015610bf85780601f10610bcd57610100808354040283529160200191610bf8565b820191906000526020600020905b815481529060010190602001808311610bdb57829003601f168201915b5050505050806020019051810190610c109190611b89565b9050610c2f604051806040016040528060008152602001600081525090565b610c418261012001514310603361156a565b6040805133815284356020808301919091528501358183015290517fe4891dc1b339486b9840f8d0c004ee6b9adfc0e7f704831a66f664617244ab1f9181900360600190a1610c923415602f61156a565b8151610caa906001600160a01b03163314603061156a565b8160c001518261010001511415610cc45760018152610d12565b8160a001518260e00151610cd89190611abb565b602082018190526101008301511415610cf45760008152610d12565b8160c0015181602001511415610d0d5760028152610d12565b600181525b610d1a611798565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610d798161158f565b50505050565b610d8f600760005414602161156a565b610da981351580610da257506001548235145b602261156a565b600080805560028054610dbb9061191b565b80601f0160208091040260200160405190810160405280929190818152602001828054610de79061191b565b8015610e345780601f10610e0957610100808354040283529160200191610e34565b820191906000526020600020905b815481529060010190602001808311610e1757829003601f168201915b5050505050806020019051810190610e4c91906119d6565b9050610e608160c00151431015602361156a565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610e91929190611b4c565b60405180910390a1610ea53415601f61156a565b8051610ed9906001600160a01b03163314610ecf5760608201516001600160a01b03163314610ed2565b60015b602061156a565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610795573d6000803e3d6000fd5b610f26600960005414602761156a565b610f4081351580610f3957506001548235145b602861156a565b600080805560028054610f529061191b565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7e9061191b565b8015610fcb5780601f10610fa057610100808354040283529160200191610fcb565b820191906000526020600020905b815481529060010190602001808311610fae57829003601f168201915b5050505050806020019051810190610fe39190611cb2565b9050610ffb6040518060200160405280600081525090565b61100d8261010001514310602961156a565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a16110803415602461156a565b8151611098906001600160a01b03163314602561156a565b604080516110e4916110be91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602661156a565b60408201516110f39043611abb565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601518185015260c08087015160a086015260e0808801519186019190915287840135908501528601356101008401528351610120840152600b60005543600155905161047091839101611d3b565b6111db600960005414602c61156a565b6111f5813515806111ee57506001548235145b602d61156a565b6000808055600280546112079061191b565b80601f01602080910402602001604051908101604052809291908181526020018280546112339061191b565b80156112805780601f1061125557610100808354040283529160200191611280565b820191906000526020600020905b81548152906001019060200180831161126357829003601f168201915b50505050508060200190518101906112989190611cb2565b90506112ad816101000151431015602e61156a565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33836040516112de929190611b4c565b60405180910390a16112f23415602a61156a565b805161090b906001600160a01b0316331461131c5760608201516001600160a01b0316331461131f565b60015b602b61156a565b611336600560005414601261156a565b6113508135158061134957506001548235145b601361156a565b6000808055600280546113629061191b565b80601f016020809104026020016040519081016040528092919081815260200182805461138e9061191b565b80156113db5780601f106113b0576101008083540402835291602001916113db565b820191906000526020600020905b8154815290600101906020018083116113be57829003601f168201915b50505050508060200190518101906113f39190611c1e565b905061140b6040518060200160405280600081525090565b61141c8260a001514310601461156a565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a338460405161144d929190611a74565b60405180910390a16114613415601061156a565b8151611479906001600160a01b03163314601161156a565b60408201516114889043611abb565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e082015261010001610470565b816107ac5760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516020810190915260008152602082015151600114156116b15781516040015160208084015101516115c49190611abb565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610d79929190611714565b602082015151156116c7578151606001516116cb565b8151515b6001600160a01b03166108fc83600001516020015160026116ec9190611dc2565b6040518115909202916000818181858888f19350505050158015610795573d6000803e3d6000fd5b8280546117209061191b565b90600052602060002090601f0160209004810192826117425760008555611788565b82601f1061175b57805160ff1916838001178555611788565b82800160010185558215611788579182015b8281111561178857825182559160200191906001019061176d565b5061179492915061182e565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016117ec60405180606001604052806000815260200160008152602001600081525090565b905290565b5080546117fd9061191b565b6000825580601f1061180d575050565b601f01602090049060005260206000209081019061182b919061182e565b50565b5b80821115611794576000815560010161182f565b60006060828403121561185557600080fd5b50919050565b60006060828403121561186d57600080fd5b6118778383611843565b9392505050565b60006040828403121561185557600080fd5b6000604082840312156118a257600080fd5b611877838361187e565b82815260006020604081840152835180604085015260005b818110156118e0578581018301518582016060015282016118c4565b818111156118f2576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561185557600080fd5b600181811c9082168061192f57607f821691505b6020821081141561185557634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561198257634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff8111828210171561198257634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146119d157600080fd5b919050565b600060e082840312156119e857600080fd5b60405160e0810181811067ffffffffffffffff82111715611a1957634e487b7160e01b600052604160045260246000fd5b604052611a25836119ba565b81526020830151602082015260408301516040820152611a47606084016119ba565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b03831681526080810161187760208301848035825260208082013590830152604090810135910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115611ace57611ace611aa5565b500190565b600060808284031215611ae557600080fd5b6040516080810181811067ffffffffffffffff82111715611b1657634e487b7160e01b600052604160045260246000fd5b604052611b22836119ba565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214611b7a57600080fd5b80604085015250509392505050565b60006101408284031215611b9c57600080fd5b611ba4611950565b611bad836119ba565b81526020830151602082015260408301516040820152611bcf606084016119ba565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b600060c08284031215611c3057600080fd5b60405160c0810181811067ffffffffffffffff82111715611c6157634e487b7160e01b600052604160045260246000fd5b604052611c6d836119ba565b81526020830151602082015260408301516040820152611c8f606084016119ba565b60608201526080830151608082015260a083015160a08201528091505092915050565b60006101208284031215611cc557600080fd5b611ccd611988565b611cd6836119ba565b81526020830151602082015260408301516040820152611cf8606084016119ba565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b81516001600160a01b03168152610140810160208301516020830152604083015160408301526060830151611d7b60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000816000190483118215151615611ddc57611ddc611aa5565b50029056fea264697066735822122055092476713254c5fbc4e2045a9b18169709ce3b720d6efde77e9dab7c6929c464736f6c634300080c0033`,
  BytecodeLen: 8502,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:67:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:120:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:72:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:83:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:84:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:95:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:96:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:103:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:105:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:112:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };

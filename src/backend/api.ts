/**
 * Created by TPL-pc on 5/24/2017.
 */
import {advantagesDb} from "./advantages.component";
import {homeDb} from "./data/home/home.data"

export function getAdvantagesApi(req, res) {
  advantagesDb.getAdvantages()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

export function getHomeApi(req, res){
  homeDb.getHomeData()
    .then(data => {
      return data;
    })
    .then(data => res.json(data));
}

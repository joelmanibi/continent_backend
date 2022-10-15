import { Injectable } from '@nestjs/common';
import { Continent, ContinentDocument } from './continent.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('continent')
    private readonly continentModel: Model<ContinentDocument>,
  ) {}

  //insertion de continent dans la BD
  async creatContinent(continent: Continent): Promise<Continent> {
    const newContinent = new this.continentModel(continent);

    return newContinent.save();
  }

  //afficher la list de tout les continents de la BD
  async readContinent() {
    return this.continentModel
      .find({})
      .then((continent) => {
        return continent;
      })
      .catch((err) => console.log(err));
  }

  //filtrer la list de tout les continents de la BD en fonction du nom et du code du continent
  find(options) {
    return this.continentModel.find(options);
  }
}

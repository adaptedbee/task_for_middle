export class FlatAgent {
  public id: number;

  public firstName: string;
  public middleName: string;
  public lastName: string;

  deserialize(data: Object): FlatAgent {
    if (data['id'] !== undefined) {
      this.id = data['id'];
    }

    if (data['attributes'] !== undefined) {
      if (data['attributes']['first_name'] !== undefined) {
        this.firstName = data['attributes']['first_name'];
      }
      if (data['attributes']['middle_name'] !== undefined) {
        this.middleName = data['attributes']['middle_name'];
      }
      if (data['attributes']['last_name'] !== undefined) {
        this.lastName = data['attributes']['last_name'];
      }
    }

    return this;
  }
}

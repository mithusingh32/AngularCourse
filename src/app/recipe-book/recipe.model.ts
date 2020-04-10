export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(inName: string, inDescription: string, inImagePath: string) {
        this.name = inName;
        this.description = inDescription;
        this.imagePath = inImagePath;
    }
}
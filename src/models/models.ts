export interface IFeatureTab {
  header: string;
  items: IFeatureItem[];
}

export interface IFeatureItem {
  icon: string;
  text: string;
}

export interface IStatItem {
  statNumber: number;
  text: Array<string | JSX.Element>;
}

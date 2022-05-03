// src/index.ts
import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const user = new User();
const company = new Company();

// 创建地图
const map = new Map("map");

map.addMarker(user);
map.addMarker(company);

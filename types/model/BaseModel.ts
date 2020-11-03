import {WeChatConfig} from '~/model/SettingModel';

export interface BaseModel {
    configs: Config,
    test: string[]
}

export interface Config {
    weChat?: WeChatConfig
}


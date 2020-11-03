import LowDb, {AdapterOptions, LowdbSync} from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import {BaseModel} from "~/model/BaseModel";
import {WeChatConfig} from "~/model/SettingModel";
import {PropertyPath} from 'lodash'

abstract class BaseDataBase<T> {
    protected dataBase: LowdbSync<T>

    protected constructor(private dataBaseName: string, private readonly option?: AdapterOptions<T>) {
        if (!this.option) {
            this.option = {}
        }
        this.option.defaultValue = this.defaultValue()
        this.dataBase = this.createDb(dataBaseName, option)
    }

    /**
     * 设置默认值，保证至少字段名称存在
     */
    abstract defaultValue(): T;

    has(path: PropertyPath): boolean {
        return this.dataBase.has(path).value();
    }

    createDb<T>(dbName: string, option?: AdapterOptions<T>): LowdbSync<T> {
        const adapter = new FileSync<T>(dbName, option);
        return LowDb(adapter);
    }
}

export namespace databases {

    const DefaultBaseModel: BaseModel = {
        configs: {},
        test: []
    }

    class BaseModelBase extends BaseDataBase<BaseModel> {
        constructor() {
            super("db.json");
        }


        get configs() {
            return this.dataBase.get('configs')
        }

        /**
         * configs.weChat
         */
        get weChat() {
            return this.configs.get('weChat')
        }

        /**
         * 获取 configs.weChat.userName
         */
        get weChatUserName() {
            return this.weChat.get('userName')
        }

        defaultValue(): BaseModel {
            return DefaultBaseModel;
        }

        hasConfigs(): boolean {
            return this.has('configs')
        }

        /**
         * 插入新的配置
         * @param config
         */
        insertWeChatConfig(config: WeChatConfig) {
            this.dataBase.set('configs.weChat', config).write();
        }

        addWeChatUser(userName: string) {
            return this.weChatUserName
                .push(userName)
                .write();
        }
    }

    export const baseModelBase = new BaseModelBase();
}



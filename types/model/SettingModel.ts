/**
 * 微信存储，通过该配置属性可以获取对应的配置
 */
export interface WeChatConfig {
    /**
     * 缓存根目录，在微信配置中查看。
     * 例如我的是在：D:\soft-cache\wechat
     */
    cacheBases: string;
    /**
     * 微信分配本地用户名
     * 例如我的是：缓存目录D:\soft-cache\wechat 下的 /shigongwen 该值就为 shigongwen
     */
    userName: string[];
    /**
     * 微信文件存储
     */
    fileStorage: string;
    /**
     * 接收文件的文件夹名称
     */
    file: string;
}


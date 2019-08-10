var _outline=[
    '主要任务与目的',
    '学习git',

    'git和SVN的区别',
    'git是分布式版本管理系统，svn是集中式版本管理系统。\\n' +
    '大型系统中git效率更快，svn会很慢\\n' +
    '不开源的项目，或者舍不得花钱的重要项目，公司一般会选择svn\\n' +
    '开源的项目，或者不重要的项目，一般会选择git\\n' +
    '大项目一般也会选择git，毕竟效率高，如果每天',

    'Git Bash使用（命令行）',
    'git config --global user.name "isbaina"\\n' +
    'git config --global user.email "isbaina@sina.com"\\n' +
    '这两个命令是配置这台机器上git的身份信息的，这个信息用于提交的时候进行验证，如果你的信息不在符合要求是提交不了代码的\\n' +
    'so this is very important!\\n\\n' +
    'pwd:显示当前路径\\n' +
    'cd:进入指定目录\\n' +
    'mkdir:创建一个文件夹\\n' +
    '使用一下上面三个命令\\n' +
    '1.查看我目前是在什么位置 pwd\\n' +
    '2.进入f盘：cd /f\\n' +
    '3.在f盘根目录下创建一个名为"learngit"文件夹\\n\\n' +
    'git init:初始化代码仓库：就是存放代码的地方，在git中就叫的代码仓库。\\n' +
    'vim [file.(txt|js|html)]创建一个文件，后缀名是文本类型文件就可以了\\n' +
    'git add file.*     把代码放到缓冲区\\n' +
    'git commit -m "mark a tip message for you find later" 提交到分支上\\n\\n' +
    '检查代码仓是否有变化\\n' +
    'git status     查看代码库中的状态，看看是否又文件被修改了或者是否有新文件需要提交等等\\n' +
    'git diff filename      查看指定文件的具体信息\\n\\n' +
    '代码找回，（时光机穿梭机）版本回退\\n' +
    'git log  --pretty=oneline  查看git日志\\n' +
    'git reset --hard HEAD^     回退到上一个版本\\n' +
    'git reset --hard 版本ID     回退到指定ID的版本号\\n' +
    'git reflog     查看git日志，比gitlog更全，比如我们回退后看不到最新版的ID就可以使用git reflog\\n' +
    '' +
    'checkout       撤销撤回操作(拓展命令)\\n' +
    'git diff HEAD -- readme.txt  查看暂缓区和版本库里面的不同\\n' +
    'git reset HEAD -- readme.txt 撤回暂缓区的内容\\n\\n' +
    '' +
    'rm *.* 表示删除文件不能删除版本库中的文件\\n' +
    'git rm *.* 删除git版本库中的文件，连同本地文件一起删除',


    '远程仓库',
    '本地库推送到远程库\\n' +
    '1.创建SSH-KEY：ssh-keygen -t rsa -C "isbaina@sina.com"\\n' +
    '2.添加公共密钥\\n' +
    '3.指定远程库:git remote add origin git@github.com:isbaina/HTML5.git\\n' +
    '4.本地库推送到远程库:git push -u origin master\\n' +
    '----(-u)第一次推送的时候加，以后不用加。作用：不会把master分支上的内容提交，同时会关联远程库master分支到本地\\n\\n' +
    '克隆远程库到本地\\n' +
    'git clone git@github.com:isbaina/HTML5.git',


    'git 分支管理',
    '1.创建分支：git checkout -b dev 创建并切换分支一般第一次创建分支时使用\\n' +
    '----git branch dev=>git checkout dev 创建分支=>切换分支\\n' +
    '2.查看当前分支：git branch\\n' +
    '3.git branch -d dev 删除分支\\n' +
    '4.手动解决合并分支时产生的冲突',


    '使用git命令创建一个文件夹',
    'Git 本地操作（add commit status  --reset hard refglog） 实际操作；\n' +
    '注册gitHub账号'
];
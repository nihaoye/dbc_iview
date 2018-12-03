<template>
    <div class="jgsz">
        <div class="queryBox">
            <div class="label font-theme">车 型:</div>
            <ul class="selectGroup">
                <li class="item active">全部</li>
                <li class="item">单人车</li>
                <li class="item">双人车</li>
                <li class="item">三人车</li>
            </ul>
            &nbsp;&nbsp;
            <button class="layui-btn layui-btn-sm btn-theme queryBtn">查询</button>
        </div>
        <div class="subTitle"><div class="itemTitle">设置</div></div>
        <div class="mycard">
            <div class="myform">
                <form>
                    <div class="formGroup">
                        <label class="label">押 金:</label>
                        <Input class="input yjInput"  placeholder="请输入押金"></Input>
                    </div>
                    <div class="formGroup">
                        <label class="label">状 态:</label>
                        <Switch class="switch">
                            <span slot="open">开</span>
                            <span slot="close">关</span>
                        </Switch>
                        <!--<div class="switch">-->
                            <!--<input id="state" type="checkbox">-->
                            <!--<label for="state"></label>-->
                        <!--</div>-->
                    </div>
                    <div class="formGroup modeSelectBox">
                        <label class="label">模 式:</label>
                        <div class="fontControl">
                            <ul>
                                <li class="modeSelect">
                                    <input id="mode_1" type="radio" name="mode" value="1"/>
                                    <label for="mode_1">模式一(循环计费)</label>
                                    <div class="tip">提示：XX小时/XX元或者XX分钟/XX元。</div>
                                </li>
                                <li class="modeSelect">
                                    <input id="mode_2" type="radio" name="mode" value="2"/>
                                    <label for="mode_2">模式二(起步价+循环计费)</label>
                                    <div class="tip">提示：XX分钟内不管用多久收费XX元，
                                        <br/>往后每XX分钟收XX元。</div>
                                </li>
                                <li class="modeSelect">
                                    <input id="mode_3" type="radio" name="mode" value="3"/>
                                    <label for="mode_3">模式三(起步价+梯度计费)</label>
                                    <div class="tip">提示：例如XX分钟内不管用多久收费XX元，
                                        <br/>往后XX分钟内每XX分钟收XX元，之后免费.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="modeDetailBox">
                        <ul class="modeDetail">
                            <li class="item">
                                <table class="layui-table" lay-skin="row">
                                    <thead>
                                    <tr>
                                        <th colspan="4" class="title">节假日</th>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th>限度</th>
                                        <th>分钟/元(时间)</th>
                                        <th>分钟/元(时间)</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td style="text-align:right;">起步价&nbsp;&nbsp;</td>
                                        <td>
                                            <div class="xd_range">
                                                <input class="input" data-ing="分钟" value="0分钟"/>~<input class="input" data-ing="分钟" value="60分钟"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input class="input" data-ing="分钟" value="0分钟"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input class="input" data-ing="元" value="120元"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align:right;">循环计费&nbsp;&nbsp;</td>
                                        <td>
                                            <div class="xd_range">
                                                <input class="input" data-ing="分钟" value="0分钟"/>~<input class="input" data-ing="分钟" value="60分钟"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input class="input" data-ing="分钟" value="0分钟"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input class="input" data-ing="元" value="120元"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align:right;">循环计费&nbsp;&nbsp;</td>
                                        <td>
                                            <div class="xd_range">
                                                <input class="input" data-ing="分钟" value="0分钟"/>~<input class="input" data-ing="分钟" value="60分钟"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input class="input" data-ing="分钟" value="0分钟"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input class="input" data-ing="元" value="120元"/>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li class="item">
                                <table class="layui-table" lay-skin="row">
                                    <thead>
                                    <tr>
                                        <th colspan="4" class="title">平时</th>
                                    </tr>
                                    <tr>
                                        <th width="90"></th>
                                        <th width="200">限度</th>
                                        <th width="142">分钟/元(时间)</th>
                                        <th width="142">分钟/元(时间)</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td style="text-align:right;">起步价&nbsp;</td>
                                        <td>
                                            <div class="xd_range">
                                                <input class="input" data-ing="分钟" value="0分钟"/>~<input class="input" data-ing="分钟" value="60分钟"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input class="input" data-ing="分钟" value="0分钟"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input class="input" data-ing="元" value="120元"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align:right;">循环计费&nbsp;</td>
                                        <td>
                                            <div class="xd_range">
                                                <input class="input" data-ing="分钟" value="0分钟"/>~<input class="input" data-ing="分钟" value="60分钟"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input class="input" data-ing="分钟" value="0分钟"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input class="input" data-ing="元" value="120元"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align:right;">循环计费&nbsp;</td>
                                        <td>
                                            <div class="xd_range">
                                                <input class="input" data-ing="分钟" value="0分钟"/>~<input class="input" data-ing="分钟" value="60分钟"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input class="input" data-ing="分钟" value="0分钟"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <input class="input" data-ing="元" value="120元"/>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </li>
                        </ul>
                    </div>
                    <div class="mark_warning">注意：循环计费、梯度计费，例如您设置了30分钟/60元，30分钟内最小的计费单位，如果游客只使用了1分钟，仍然收费60元。</div>
                    <div class="form_opt">
                        <button type="button" class="layui-btn layui-btn-sm btn-form-theme-o">重 置</button>
                        <button type="button" class="layui-btn layui-btn-sm btn-theme btn-form-theme">完 成</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="subTitle"><div class="itemTitle">预览</div></div>
        <div class="mycard" style="margin-bottom:0;">
            <ul class="yl">
                <li>
                    <label>押 金:</label> 500元
                </li>
                <li>
                    <label>状 态:</label> 开启
                </li>
                <li>
                    <label>模 式:</label> 模式二(起步价+循环计费)<br/>
                    <div class="ylitem">
                        <label>节假日:</label>
                        <div class="inlineBlock">
                            0-60，收费120元。<br/>
                            60-90，收费60元。<br/>
                            90-120，收费60元。<br/>
                            ...<br/>
                            90-120，收费60元。<br/>
                            90-120，收费60元<br/>
                        </div>
                    </div>
                    <div class="ylitem">
                        <label>平时:</label>
                        <div class="inlineBlock">
                            0-60，收费120元。<br/>
                            60-90，收费60元。<br/>
                            90-120，收费60元。<br/>
                            ...<br/>
                            90-120，收费60元。<br/>
                            90-120，收费60元<br/>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "jgsz",
        components: {}
    }
</script>

<style scoped>

</style>

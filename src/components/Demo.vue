
<template>
  <div id="">
			<h1>{{ msg }}</h1>
			<button v-html="filler"></button>
    <hr>
			<p v-bind:class="red_word">v-bind</p>
			<p :class="red_word">v-bind</p>
    <hr>
			<p v-if="seen">v-if</p>
    <hr>
			<button v-on:click.prevent="isseen">v-on show or hidden</button>
			<button @click.prevent="isseen">v-on show or hidden缩写</button>
    <hr>
			<p>{{ reversemsg }}</p>
			<p>也可用声明方法，并在双大括号内引用。区别是计算属性只有在其依赖的data发生改变时执行，否则直接返回之前的计算结果。方法则是每次都执行一遍。</p>
    <hr>
			<div v-bind:class="{ active: isActive }">class绑定</div>
    <hr>
		v-for 
			<ul>
				<li v-for="(item,index) in items" :key="item.id"> {{index}} name: {{ item.name }} age: {{ item.age }} phone: {{ item.phone }}</li>
			</ul>
			v-for in project
			<ul>
				<li v-for="(value,key) in items[0]"> {{key}}:{{value}} </li>
			</ul>
    <hr>
		event
			<button v-on:click="say('123',$event)">say</button>
    <hr>
		<h1>表单</h1>
		<ul style="padding-left:50px;">
			<li>输入：
				<input v-model.trim="message" placeholder="edit me">
				<textarea v-model="message" placeholder="add multiple lines"></textarea>
				<p>Message is: {{ message }}</p>
			</li>
			<li>单选按钮
				<input type="radio" id="one" value="One" v-model="picked">
				<label for="one">One</label>
				<br>
				<input type="radio" id="two" value="Two" v-model="picked">
				<label for="two">Two</label>
				<br>
				<span>Picked: {{ picked }}</span>
			</li>
			<li>复选
				<br>
			单个
				<input type="checkbox" id="checkbox" v-model="checked">
				<label for="checkbox">{{ checked }}</label>
				<br>
			多个
				<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
				<label for="jack">Jack</label>
				<input type="checkbox" id="john" value="John" v-model="checkedNames">
				<label for="john">John</label>
				<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
				<label for="mike">Mike</label>
				<br>
				<span>Checked names: {{ checkedNames }}</span>
			
			</li>
			<li></li>
			select
			<select v-model="selected">
				<option disabled value="">请选择</option>
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>
			<span>Selected: {{ selected }}</span>
			<li></li>
		</ul>
    <hr>

  </div>
</template>

<script>
	export default{
		data(){
			return{
				msg :"write",
				message:"123",
				filler :"v-html",
				red_word :"red-word",
				seen :true,
				isActive: true,
				comput :"this is computed for reverse message.试一下吧.",
				items:[
					{
						"id":"one",
						"name":"jack",
						"age":18,
						"phone":"123121523141"
					},
					{
						"id":"two",
						"name":"bruce",
						"age":17,
						"phone":"123121523141"
					}
				],
				picked: "Two",
				checked: true,
				checkedNames: [],
				selected:"B",
			}
		},
		components:{

		},
		methods:{
			isseen(){
				this.seen = !this.seen;
				var arr = [
					"7457342",
					"0635745234",
					"984562",
				]
				
				arr = arr.map(function (str){
					var result = "";
					str = str.split("");
					str.map(function(item,index){
						(index % 2 == 1 && index != (str.length-1))?item += '|':item;
						result += item;
						console.log(index,item)
						console.log(result)
					})
					str = result;
					console.log(str)
					return str
				})	
			
      
				console.log(arr);
			},
			say(message,event){
				event.preventDefault()
				console.log(message)
				console.log(event)
			}
		},
		computed:{
			reversemsg(){
				return this.comput.split('').reverse().join('')
			}
			
		},
		mounted(){

		}
	}
</script>

<style>
.red-word{
    color:red;
}
.active{
	color:green;
}    
</style>

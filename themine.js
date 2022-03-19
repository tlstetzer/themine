(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"themine_atlas_1", frames: [[0,413,1759,54],[0,364,122,45],[826,0,500,411],[1328,0,454,77],[0,0,824,362],[1698,134,299,53],[1784,0,251,53],[1328,189,183,53],[1328,79,387,53],[1717,79,253,53],[1328,134,368,53]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_11 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ray
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(254,251,226,0.349)").s().p("AwjQKQn6gPitADMAW0ggPIEwABMAaxAgQQjMgXnTALIwVAYQkEAGj3AAQkqAAkVgIg");
	this.shape.setTransform(119.825,157.3717);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fixture
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2015").ss(2,1,0,3).p("AAGhSIASgBIAABoIB0BAIkXAAICGhDg");
	this.shape_1.setTransform(106.4889,43.8466);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F3D2E").s().p("AiLBUICFhDIALhjIASgBIABBnIB0BAg");
	this.shape_2.setTransform(106.5,43.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// bulb
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C7B3A6").ss(0.1,1,0,3).p("AAzAAQAAAVgPAPQgPAOgVAAQgUAAgPgOQgPgPAAgVQAAgUAPgOQAPgPAUAAQAVAAAPAPQAPAOAAAUg");
	this.shape_3.setTransform(106.7,53);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFAB9").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUABQAVgBAPAPQAPAPAAAUQAAAVgPAPQgPAPgVgBQgUABgPgPg");
	this.shape_4.setTransform(106.7,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.1,32.6,347.90000000000003,229.00000000000003);


(lib.end_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#313131").ss(3,1,1).p("EAxPgUqIh+ClQgGAHgIADQgFADgHAAIgZCkIixByIAABZIhMBYIhZCMIANBlIhlCLIAMGuIAaAmIAAAmIBYGJIByBYIAmAzIAmGiIByBMQAOAJAJAdQACAGAAAHQAhAFgNAsMhgZgAPMAAAgo0g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#313131").s().p("EgxOAUcMAAAgozMBidgASIh+ClQgGAGgJADQgEADgHAAIgZClIiyBxIAABZIhLBZIhZCLIAMBmIhlCKIANGuIAZAmIAAAmIBZGJIByBYIAmAzIAmGiIByBLQAOAKAJAdQACAGAAAGQAhAGgNArg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.end_mc, new cjs.Rectangle(-316.6,-133.7,633.2,267.5), null);


(lib.beamEnd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cable
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#252525").ss(4,1,0,3).p("ArBg/QKgCkLjgv");
	this.shape.setTransform(191.625,-113.6636);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// nails
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#484848").s().p("AJ/BLQgIgJAAgMQAAgMAIgIQAIgIAMgBQALABAIAIQAJAIAAAMQAAAMgJAJQgIAJgLgBQgMABgIgJgAqmghQgIgJAAgMQAAgMAIgIQAJgIALAAQAMAAAIAIQAIAIAAAMQAAAMgIAJQgIAJgMgBQgLABgJgJg");
	this.shape_1.setTransform(186.375,-114.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// xbeam_r
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9B5723").ss(6,1,0,3).p("ALTCDIgCAWI2xh3IADgjQAAgBAAgBIAMiVIDbARADShMIIOArIgLCMAnfiEIJNAv");
	this.shape_2.setTransform(187.4576,-113.8968);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B5723").s().p("AKGB+QgHgDABgGQABgHAGgEIgGAAIgBABQgEADgJAAQh0gBh1gTIgCADQgDAGgMgCIgbgEIgcgDIgbABQgRABgKgCQgLgDABgHQgcABgOgCQgXgCgRgIQgKgFgFABIgHAEQgGACgIgBIgEgBIgTAEQgyALgdgCQgIgBgCgDQgCgCABgEQABgDADgDQACgBAKgCIA3gKQACgGAJgCIAPAAQAGAAAKgBQALgCAFABIAIAAIARgCIAIgDQAEgBAHABIARAAQAfABA7ANIAXAFQAXABAPAFIAFABQB7AVB8ADIAIABQACgDAGgCIAMABIBGAMIAHACQANACACAIQACAHgJAFQgGACgJgBIgCAAIgbgDQgQgBgLAFIgIADIgFABIgDgBgAmvAeQgZgEglgJIgKgDIgCABIgKABIgQACIgVACIgLgBQgFgDgCgEIAAgBIgCAAQgJABgcgCIhSgGQgHAAgEgCQgGgCgBgFIgDABQgMADgEAAQgFgBgEgDQgCgCgBgDIABgDQABgHANgDQAlgJAWAAIAXACIA7AIQAuAGAagFIAdgGQAXgDAjAMQAqANAQABQAPACAEACQAEADABAFQABAEgCABIADABQAJAFgCAIQgDAIgPABIgNAAQgeAAgkgGgABogLQgHgFgGgGQgCADgGABQgFgBgIgEIgngVQgWgLgSgFQgQgFgygEQgpgDgWgLQgOgGACgKQABgEAFgCQADgCAFABIAQAGQALAFAQACIAcACQAVABAVAEQgCgFAEgEQADgDAIAAQAOABANAEIAXADQASADANgBIAigEIgBgCQgCgGAAgFQAAgDAEgIQAEgHADgBQAFgDAIABQAjAEASAFQAMAEAEAGQADAEAAAFQgBAFgEADQAHgBADAFIABACIASAEQA6AOAVADQAbAEBGABQA9ABAjAIQAKACABAGQABAFgGACQgFADgGAAIhTgCQhUgDgqgIIgRgEIAAAEQgBAEgCACQgDACgGABIgMACIgQAAIgtgFQAHADACAFQADAHgIAHQgHAFgJABQgKAAgIgFQgMgHgFADQABAEgDAEQgDAEgFAAIgCABQgHAAgIgFgABihDIAHACIACgEIgJACgAB3hGIADABIAHgCIgKABg");
	this.shape_3.setTransform(188.1296,-112.9443);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BC6E2E").s().p("ArgAjIADgjQABABACACQAEAEAEABQAFAAAMgEIADgBQABAHAGACQAEACAGAAIBSAGQAcACAKgBIACgBIAAABQABAFAGADIALAAIAVgBIAQgCQABAIADAFQAHANAIgEQAHgCgBgKIgEgJQAmAJAZAEQAsAHAjgCQAPgBADgHQACgJgKgEIgCgBQABgBAAgEQgBgGgEgDQgFgCgPgCQgQgBgpgMQgkgMgWADIgdAGQgaAEgvgFIg7gIIgWgCQgWAAglAJQgNACgBAIIALiVIDbASIAEAeIATAAIADAAQAAgMgDgQIJOAvIABADIgiAEQgNABgTgDIgWgDQgOgFgNAAQgIAAgDADQgEAEABAFQgUgEgVgBIgcgCQgQgCgLgFIgQgHQgFgBgDACQgFADgBAEQgCAJAOAHQAWAKApADQAyAFAQAEQARAGAXAKIAnAWQAIAEAFABQAFgCADgCQAFAGAIAFQAJAEAIgBQAEAAADgDQAEgFgBgDQAFgDALAHQAJAFAJAAQAKgBAHgGQAIgGgDgHQgCgFgHgDIAtAFIAQAAIAMgCQAGgBADgCQACgCABgFIgBgDIASAEQAqAHBUADIBSACQAHAAAFgCQAGgCgBgFQgBgGgKgDQgjgHg+gCQhFAAgbgEQgWgDg5gPIgSgDIgBgCIIOArIgLCMIhHgMIgLgBQgGACgCADIgIgBQh8gDh8gVIgEgCQgQgEgWgCIgYgEQg7gOgfgBIgQABQgHgBgEABIgJADIgRACIgHAAQgGgBgKACQgKABgGgBIgQABQgIACgCAGIg3AJQgKADgDABQgDADAAACQgBAFACACQACADAIABQAcACAzgLIATgEIAEABQAIABAFgCIAIgEQAFgBAKAFQAQAIAXACQAPABAcAAQgBAGALADQAKADARgBIAbgCIAcADIAbAFQAMABADgFIACgEQB1ATB0ACQAJAAADgDIABgBIAHAAQgGAEgBAGQgBAHAHADQADABAFgCIAIgCQALgGAQABIAbAEIgCAVgAoWgeIAMgBIgKgBIgCACgAnxhQIADAAIgDAAIAAAAgABpg6IAJgBIgCAEgAB9g8IAKgBIgGABIgEAAg");
	this.shape_4.setTransform(187.45,-113.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// pole
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#9B5723").ss(6,1,0,3).p("ABiVqIAAAcIjDAAMAAAgsLIDDAAMAAAAra");
	this.shape_5.setTransform(118.125,-0.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9B5723").s().p("AhBK8QgEgCgCgFQgCACgEAAQgDAAgEgCQgDgDgBgEQgCgGADgKIAFgQQgDgUAAgTIAAgfIAChiQABgKgDgGIgDgKQgCgGADgEQACgDAEAAQAEgBADADQAFADAEAJIATAmQAGAMAHAEQAJAFAPgFQAQgFAHABIAMABQADgCAGgIIAJgTQgFgQgCgTQgCgSgBggQgEimgKibIgGhoIgEAQIgGAYQgIAkAAAOIgBAeIAAALQAAAKAGAjIAIAuQACAKgGAPQgFAOgCADQgCAEgFgTQgFgTAAgMQABgLgCgeIgDgfQgMgogGhSIgDg1QAAgQAEg4IAEg1IAGg3QAFgfAGg2QAGg2gGAZIgDAMIAAgDIAAgyQAAgHADgFQABgCADgBQAEgCACABQAEADAAAIQAFAhgCAqIgCAaIADAIIAFAPIAJAUIAEASIAHg9QAEgkAAhNQAAhLAEgnIAKhOQAGgvgEggQgBgNADgFQACgEAFgBQAFgCADAEQACACAAAFQAFAqgHA+IgKBiIACgEQAFgFAFACQAGACAAAHQAAAGgDAGQgFAUABAbIAGAvQAEAjABBHIAAA9QgfDJAOgTIACgDIAAABIADABQAGACAAALQABAZgEArIAAAGIgGA2IgBAKIgCAQIgBANQACACABADIAAAPQAAAMAFAYIABASIACAQQAAAGgDANQAAAFACANIABAWQAAANADAIIADAJQABAFgCADQgCAEgEAAQgEABgDgCIgEgEIABASIABAwQAAAeADATIAAABQAFABAEAFQADAFABAKQAFA+gMA1IgHAbQgEAQgBAMQgBAKAEADQAFAFANABQAFACADAEIACAEQADAHgDAHIgCADQgFAIgOAAQgHAAgSgFQgNgDgMgBQgEAKgOAFQgPAEghABQgLAAgFgDgAgRIdIADAAIACgBIAGgDIgEABIgDABIgBAAIgDACgAAqB3IAAgHIgBgEgAALiLIABATIABgOIgCgIIgBgHIgBgCgAA4idIAAAIIAEgBIAAgCIgBgSgAA5jGIAAAAIAAgIIAAAIgAA5kDIAAgVIABgUIgBApg");
	this.shape_6.setTransform(119.2542,69.9025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC6E2E").s().p("AhhWGMAAAgsLIDDAAMAAAAraQgEgEgFgCQgNgBgEgFQgEgDABgKQAAgMAEgQIAHgbQANg1gGg+QgBgKgCgFQgFgGgEAAIgBgBQgDgTAAgeIAAgwIgCgSIAEAEQAEACAEgBQAEAAACgEQACgDgBgFIgEgJQgDgIAAgNIAAgWQgDgNABgFQADgNAAgGIgDgQIgBgSQgFgYABgMIgBgPQAAgDgDgDIACgMIACgQIABgKIAFg2IABgGQADgrgBgaQAAgLgGgCIgDgBIAAgBIgCACQgOAUAgjJIgBg9QgBhHgEgjIgFgvQgCgbAGgUQACgGAAgGQAAgHgGgCQgFgCgEAFIgDAEIALhiQAHg+gFgqQAAgFgCgCQgDgDgFACQgFAAgDAEQgCAFABANQADAggFAvIgKBOQgEAngBBLQAABNgDAkIgIA9IgEgSIgJgUIgEgPIgEgJIACgZQACgqgEghQgBgIgEgDQgDgBgDACQgCABgCACQgCAFAAAHIAAAyIAAADIACgMQAGgZgGA2QgGA2gFAfIgFA3IgFA1QgDA4AAAQIADA1QAGBTALAoIADAfQACAdAAAMQgBAMAEATQAFATACgEQADgDAFgPQAGgOgBgKIgJguQgHgkAAgJIABgLIAAgeQABgOAIgkIAGgZIAEgQIAHBpQAKCbAECmQAAAgACASQACATAFAQIgJATQgFAIgEACIgMgBQgHgBgRAFQgOAFgJgFQgGgEgGgMIgTgmQgEgJgFgDQgDgDgEABQgFAAgCADQgDAEACAGIAEAKQACAGgBAKIgCBiIAAAfQABATADAUIgGAQQgDAKACAGQABAEAEADQADACAEAAQADAAACgCQADAFADACQAFADAMAAQAggBAOgEQAQgFADgKQAMABANADQASAFAHAAQAOAAAGgIIAAAcgAgGTbIAEgCIABAAIABgBIAEgBIgFADIgBABgAA0MqIACADIgBAIgAAWIyIgCgNIACADIAAAHIACAIIgBANIgBgSgABEIfIACgMIACASIAAACIgEABIAAgJgABEH3IAAgIIABAIgABFGRIAAAUIgBAUIABgog");
	this.shape_7.setTransform(118.125,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105.4,-144.7,158.9,288.9);


(lib.beam = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cord
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#252525").ss(3,1,0,3).p("AwIA0QIfgmHrhBQIIA7H/AZ");
	this.shape.setTransform(120.125,-71.9558);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// nails
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#484848").s().p("AHKA2QgFgGAAgJQAAgIAFgHQAHgFAIgBQAIABAGAFQAGAHAAAIQAAAJgGAGQgGAGgIAAQgIAAgHgGgAnmgXQgGgHAAgIQAAgIAGgHQAGgGAJAAQAHAAAGAGQAHAHAAAIQAAAIgHAHQgGAGgHAAQgJAAgGgGg");
	this.shape_1.setTransform(166.65,-73.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// xbeam_r
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9B5723").ss(6,1,0,3).p("AIHBfIgBAPIwWhVIADgZQgBgBABgBIAIhrICdANACXg2IF6AfIgJBkAlXheIGmAi");
	this.shape_2.setTransform(167.4041,-73.2712);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B5723").s().p("AHPBbQgEgCAAgFQABgFAEgDIgEAAIgBABQgCACgHAAQhTgBhUgNIgCACQgCAEgIgBIgUgDQgMgCgIAAIgTABQgMAAgIgBQgHgDAAgFQgUABgKgBQgRgBgMgGQgHgEgDABIgGADQgEABgFgBIgDAAIgOADQgkAIgVgCQgFgBgCgCQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIADgEIAJgDIAngHQACgEAGgBIALgBIAMAAQAHgCAEABIAFAAIANgCIAGgBQADgBAFABIALgBQAXABAqAKIARADQAQABALADIADABQBZAPBZADIAFAAQACgCAEgBIAJAAIAyAJIAFABQAKABABAGQACAGgHADQgEACgHgBIgBAAIgTgDQgMAAgIADIgGACIgEABIgCAAgAk1AWQgSgDgbgHIgHgCIgBABIgHABIgMABIgPABIgIAAQgEgCgBgDIAAgBIgBAAIgbAAIg7gFQgFAAgDgBQgEgCAAgDIgDAAIgLADQgEgBgDgCQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgCQAAgFAKgCQAagGAQAAIARABIAqAGQAhAEATgDIAVgFQAQgCAZAIQAeAKAMABQAKABAEABQACACABAEQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABIACAAQAHAEgCAGQgBAFgLABIgJAAQgWAAgagEgABKgIQgFgDgEgEQgBACgEAAIgKgDIgcgPQgQgIgMgEQgMgDgjgDQgegCgQgIQgKgFACgGQAAgDAEgCQACgCADABIAMAFQAIADALACIAUABIAfAEQgCgEADgDQACgCAGAAQAKABAJADIAQACQAOACAJgBIAYgDIgBgBQgBgFAAgDIADgIQADgFACgBQADgCAGABQAaADAMAEQAJACADAEQACADAAAEQgBAEgCACQAFgBACAEIAAABIANADQAqAKAPACQAUADAxABQAtAAAZAGQAGACACAEQAAAEgEABQgEACgEAAIg8gBQg8gDgegFIgNgDIABADQgBADgCABQgBACgFABIgIABIgMAAIgggEQAFADABADQACAFgFAFQgFAEgHAAQgHAAgGgDQgJgFgDACQABADgDACQgCADgDABIgBAAQgFAAgHgEgABGgwIAFACIACgDIgHABgABVgyIADABIAEgBIgHAAg");
	this.shape_3.setTransform(167.9257,-72.5717);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BC6E2E").s().p("AoQAZIADgZQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAABQADACAEABIALgDIADAAQAAAEAEACQADABAFAAIA7AFIAbAAIABAAIAAABQABADAEACIAIAAIAPgBIAMgBQAAAGADAEQAFAIAFgCQAFgCAAgHIgDgHQAbAHASADQAfAFAagBQALgBABgFQACgGgHgEIgCAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgEgCgCQgEgCgKgBQgMgBgegJQgZgIgQACIgVAFQgTADghgEIgqgGIgRgBQgQAAgaAGQgKACAAAFIAIhrICdANIADAWIAOAAIACAAIgCgUIGmAiIABABIgYADQgJABgOgCIgQgCQgJgDgKgBQgGAAgCACQgDADACAEIgfgEIgUgBQgLgCgIgDIgMgFQgDgBgCACQgEACAAADQgCAGAKAFQAQAIAeACQAjADAMADQAMAEAQAIIAcAPIAKADQAEAAABgCQAEAEAFADQAIADAFAAQADgBACgCQADgCgBgDQADgCAJAFQAGADAHAAQAHAAAFgEQAFgFgCgFQgBgDgFgDIAgAEIAMAAIAIgBQAFgBABgCQACgBABgDIgBgDIANADQAeAFA8ADIA8ABQAEAAAEgCQAEgBAAgEQgCgEgGgCQgZgGgtAAQgxgBgUgDQgPgCgqgKIgNgDIAAgBIF6AfIgJBkIgygJIgJAAQgEABgCACIgFAAQhZgDhZgPIgDgBQgLgDgQgBIgRgDQgqgKgXgBIgLABQgFgBgDABIgGABIgNACIgFAAQgEgBgHACIgMAAIgLABQgGABgCAEIgnAHIgJADIgDAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQACACAFABQAVACAkgIIAOgDIADAAQAFABAEgBIAGgDQADgBAHAEQAMAGARABQAKABAUgBQAAAFAHADQAIABAMAAIATgBQAIAAAMACIAUADQAIABACgEIACgCQBUANBTABQAHAAACgCIABgBIAEAAQgEADgBAFQAAAFAEACQADABADgCIAGgCQAIgDAMAAIATADIgBAPgAl/gVIAJAAIgHgCIgCACgAllg5IADAAIgCAAgABLgpIAHgBIgCADgABagrIAHAAIgEABIgDgBg");
	this.shape_4.setTransform(167.425,-73.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// xbeam_l
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#9B5723").ss(6,1,0,3).p("AoNgUIgCgQIQYg9IAICGIieAJAiMBLIl7AWIgFhkAFiAvImnAY");
	this.shape_5.setTransform(69.5728,-72.4989);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC6E2E").s().p("AoNgDIAzACQAHAAACgBQAEgBABgDIAGAAQBYgKBaACIAEABQALACAQgCIARACQArADAWgCIAMgDIAIgBIAGgCIAMgDIAFgBIALgCIALgDIAMgBQAGgDAAgFIAngLIAIgFQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBQgBgCgGAAQgVABgiAOIgOAEIgCAAQgGAAgEACIgFAEQgDAAgIgCQgNgEgQABIgeAEQAAgGgIAAQgIgBgMACIgTAEIgUABIgUAAQgIAAgCADIgBADQhVgChTALQgGABgCADIgBAAIgEAAQAEgCAAgFQAAgFgFgCQgDgBgDADIgGADQgHAEgMABIgTABIgBgQIQXg9IAICGIidAJIgGgVIgOACIgCAAQABAJAEALImnAZIgBgBIAYgHQAIgCAOABIARAAQAIABALgBQAFgBACgCQACgDgBgDQAPAAAPgBIAVgBQALAAAIACIAMACQAEABACgCQADgDAAgCQABgIgLgCQgQgGgeACQgkACgMgCQgMgBgRgGIgegLQgHgDgDABQgEABgBACQgFgDgFgDQgIgDgFABQgEABgBAEQgCACABADQgDACgJgEQgHgCgHABQgGABgFAGQgEAFACAFQACADAFABIggABIgMACIgIACQgEABgBACQgCACAAAEIABACIgOgBQgegBg8AGIg7AGQgFABgDACQgEACABAEQACAEAHABQAZACAsgGQAygGATAAQAQAAAqAEIAOABIAAABIl6AXgAFoAIIACAAIAAAAIgCAAgAF3gcIAHAAIABgDIgIADgAErgiQAaAFAQgEIAUgIQASgFAigBIAqAAIARgBQAQgCAZgLQAJgDAAgFQAAgEgDgBQgCgCgEAAQgDAAgJAEIgCABQgBgFgEgBQgEAAgEAAIg7AEIgbADIgBAAIAAgBQgCgCgEgCIgIABIgOADIgMACQgBgEgDgFQgGgHgGADQgEACABAIIAEAGQgcgDgSgBQggAAgZAEQgKACgBAGQgBAGAHACIACABIAAAEQABADADACQADACALAAIADgBQAMAAAcAFgAhVA4IADAAIgHABIAEgBgAhJA0IAGABIgHABIABgCg");
	this.shape_6.setTransform(69.625,-72.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9B5723").s().p("AhtBWQgKgBgDgEQgDgCAAgEQAAgEACgCQgFABgCgEIAAgBIgOgBQgqgEgQAAQgTAAgyAGQgsAFgagCQgGAAgCgEQgBgEAEgCQADgCAEgBIA7gGQA9gHAeACIAOABIgCgDQABgDACgCQABgCAEgBIAIgDIAMgBIAggBQgFgCgCgCQgCgGAEgFQAEgFAHgBQAHgBAGACQAJAEAEgCQgCgDADgDQABgDADgBQAGgCAIAEQAFACAFAEQABgCAEgBQADgBAGADIAfALQAQAGANABQAMACAjgCQAfgCAQAGQAKACAAAIQAAACgDADQgDABgDAAIgNgCQgHgDgMAAIgUACQgPABgPgBQABADgCAEQgCACgFABQgLABgKgCIgPAAQgOAAgJACIgXAGIABABQACAEAAAEIgBAIQgDAGgCABQgDACgGAAIgMAAIgagBgAhPAwIAHgBIgCAAIgFABgAhAAtIAIgCIgGgBIgCADgAoCgMIgFgBQgKAAgCgFQgCgFAGgEQADgCAIAAIABAAIATgBQAMgBAHgFIAGgDQADgCACABQAGACAAAFQAAAFgFACIAFAAIAAgBQADgCAGgBQBTgLBVACIABgDQACgEAIAAIAUAAIAUAAIATgEQAMgCAIABQAHAAABAFIAegDQAQgBANAEQAHACADgBIAGgDQAEgCAGAAIACAAIAOgFQAigNAVgBQAFAAACACQAAABABAAQAAABAAAAQAAABAAAAQABABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAIgIAEIgnAMQgBAFgFACIgMACIgLADIgLACIgGABIgMADIgGACIgHABIgMACQgWADgrgEIgRgBQgRACgLgCIgDgBQhagDhYALIgGAAQgBACgEACQgDABgGAAgAE2grQgggFgLAAQgLABgDgCQgDgCgBgEIAAgDIgCgBQgHgCABgGQAAgGALgCQAZgFAgABQARABAdADIAGAAIABAAIAIgDIAMgCIANgDIAJgBQAEABACADIAAABIABAAIAbgEIA6gDQAFgBADABQAFABABAFIACgCQAJgDADAAQADAAADACQACABAAAEQAAAFgJADQgZAKgPADIgRAAIgrABQghAAgSAGIgVAIQgGACgJAAQgMAAgOgDg");
	this.shape_7.setTransform(68.55,-71.5771);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// pole
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#9B5723").ss(6,1,0,3).p("ABGPjIAAAUIiLAAIAA/tICLAAIAAfK");
	this.shape_8.setTransform(117.675,8.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9B5723").s().p("AguH2QgDgBgCgEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgDgCQgCgBgBgEQgBgEACgHIAEgMIgDgbIAAgWIAChHQABgHgCgFIgDgHQgBgEACgDQABgCAEAAQACgBADACQADADADAGIAOAbQAEAJAFADQAGADALgDQALgEAFABIAJABQACgCAEgGIAHgNQgEgLgBgOQgCgNAAgXQgDh3gHhvIgFhLIgDAMIgEARQgFAZAAALIgBAVIAAAIQAAAGAEAaIAGAhQABAIgEAKIgFAMQgCADgDgOQgEgNABgJQAAgIgBgVIgDgWQgIgdgEg7IgCgmIACg0IADgmIAEgnQAEgWAFgnQAEgngEASIgCAJIAAgCIAAgkQAAgFABgEIAEgCIAEgBQACACAAAGQAEAYgCAeIgBATIACAFIAEALIAGAPIADAMIAFgrQADgaAAg4QAAg1ADgcIAHg4QAEgigCgXQgBgJACgEQACgDADgBQAEgBACADQABACAAADQAEAegFAsIgIBHIACgDQADgDAEABQAEACAAAFQAAAEgCAEQgEAOACAUIADAiQADAZABAyIAAAtQgWCQAKgOIABgCIAAABIACAAQAFACAAAIQAAARgCAfIAAAEIgEAnIgBAHIgBAMIgCAJQABABAAAAQAAABABAAQAAAAAAABQABAAAAABIAAAKQAAAJADASIABAMIACAMIgCAOIABAMIAAAQQAAAKACAFIADAHQABAEgCACQgBACgDABIgFgCIgDgCIABANIAAAiQAAAVACAOIABABQADAAADAFQACADABAHQAEAsgJAmIgFAUQgDAMgBAIQAAAHADADQADADAJABQAEABACADIACADQACAFgDAFIgBACQgEAGgKAAQgFAAgNgEQgJgCgJAAQgCAGgKAEQgLADgXABQgJAAgDgDgAgMGEIADAAIAFgDQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCABIAAAAIgDABgAAeBWIABgGIgBgCgAAIhjIABANIAAgKIgBgFIAAgGIgBgBgAAphwIAAAFIADAAIAAgCIgBgNg");
	this.shape_9.setTransform(118.4873,58.6607);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BC6E2E").s().p("AhFP3IAA/tICLAAIAAfKQgCgDgEgCQgJAAgDgDQgDgDAAgHQABgIADgMIAFgUQAJgmgEgsQgBgIgCgCQgDgFgDAAIgBgBQgCgOAAgVIAAgiIgBgOIADADIAFACQADgBABgDQACgCgBgDIgDgHQgCgGAAgJIAAgQIgBgNIACgOIgCgLIgBgMQgDgSAAgJIAAgKQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIACgJIABgMIABgHIAEgnIAAgEQACgfAAgSQAAgJgFgBIgCAAIAAgBIgBACQgKAOAWiRIAAgsQgBgzgDgZIgDgiQgCgTAEgOQACgEAAgEQAAgGgEgBQgEgBgDACIgCADIAIhGQAFgsgEgeQAAgDgBgCQgCgCgEABQgDAAgCADQgCAEABAIQACAXgEAjIgHA3QgDAdAAA1QAAA4gDAZIgFAsIgDgMIgGgPIgEgLIgCgGIABgSQACgfgEgXQAAgGgDgCIgEAAIgDADQgBADAAAFIAAAkIAAADIACgJQADgSgDAmQgFAogEAWIgEAnIgDAmIgCA0IACAmQAEA8AIAcIADAXQABAUAAAJQgBAJADANQADANACgCIAGgNQAEgKgBgHIgGghQgFgaAAgGIAAgIIABgVQAAgLAGgZIAEgSIADgMIAFBMQAHBvADB2QAAAXACANQABAOAEALIgHAOQgEAGgCACIgJgCQgFAAgMAEQgKADgGgDQgFgDgEgJIgOgbQgDgGgDgDQgDgCgCAAQgEAAgBADQgCADABAEIADAHQACAFgBAGIgCBHIAAAXIADAbIgEAMQgCAHABAEQABADACACQADACACgBQABAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAQACAEADABQADACAJABQAXgBAKgDQALgEACgHQAJABAJACQANADAFABQAKAAAEgHIAAAVgAgEN8IADgBIAAAAIABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIgEADgAAmJFIABADIgBAFgAAQGUIgBgJIABABIAAAFIABAGIAAAKIgBgNgAAxGGIACgJIABANIAAACIgDAAIAAgGg");
	this.shape_10.setTransform(117.675,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.4,-96.2,211.6,209);


(lib.bankDoor_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D00").s().p("AAbAmIgBgBIgBAAIgBAAIgBgBIgJgEIgBgBIgBAAIgBAAIgBgBIgBgBIAAAAIgBAAIgDgDIgFgIIgFgFIgBgBIgDgCIgBAAIAAAAIgCAAIgBgBIAAAAIgBABIgBAAIgBAAIgBAAIgBABIgCABIAAABIAAAAIgKALIgBACIgBAAIgBABIAAAAIgDACIAAAAIgFAAIgBAAIgBAAIgDgCIAAAAIgCgBIgCgCIgBAAIAAAAIAAgBIgBAAIgHgJIAAAAIAAgBIgBgBIgFgMQgCgCACgDIAGgLIABgCIABgBIABgCIAEgDIACgDIAAAAIABAAIAAgBIAAAAIABAAIACgCIACgBIABAAIACgBIABAAIACAAIAAgBIABAAIABABIABAAIABAAIABAAIACACIABABIAAAAIABABIABACIADADIABACIAEAFIABABIAAABIAAAAIAAAAIACABIABABIAAAAIABAAIACABIAEAAIAAAAIABAAIADgCIAAAAIABgBIABAAIAKgMIADgCIAAgBIABAAIAAAAIACgBIABgBIAAAAIACgBIADgBIAHgDIABAAIACAAIABgBIABAAIABABIABAAIADAAIABABIACABIABAAIAAAAIAAABIABAAIAFADIAAAAIAAABIACABIACACIABABIAAABIABAAIACADIAFAHIABABIAAABIAGALQACACgDADIgHANIAAAAIgCACIgHAJIgDACIgBABIgBAAIAAABIgFADIAAAAIgBAAIgBABIgCABIgBAAIgDABg");
	this.shape.setTransform(-57.0377,12.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#483021").s().p("AjzJVIAAgBIABnNIAAAAIABAAIAAAAIABAAIACAAIAAABIACAAIADACIAAABIAAHJIAAABgAh5JUIAAynIALAAIgBSngADqJTIAAynIAJAAIABSngAB8JTIgBAAIgFAAIABymIAKAAIgBSmgAAJJSIgBymIAKAAIABSmgAjxByIgBgBIAArDIAKAAIgBLCIAAAAIgDACIAAAAIgBAAg");
	this.shape_1.setTransform(-34.25,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(164,131,110,0.965)").s().p("AB3JVIAAgBIAFAAIABymIgKAAIgBSmIAFAAIgCABIjoAAIAAymIgKAAIAASmIhwAAIAAnJIAFAFIAGAIIADADIABAAIAAAAIABABIABABIABAAIABAAIABABIAJAEIABABIABAAIABAAIABABIAEAAIADgBIABAAIACgBIABgBIABAAIAAAAIAFgDIAAgBIABAAIABgBIADgCIAHgJIACgCIAAAAIAHgNQADgDgCgDIgGgLIAAgBIgBgBIgFgHIgCgDIgBAAIAAgBIgBgBIgCgCIgCgBIAAgBIAAAAIgFgDIgBAAIAAgBIAAAAIgBAAIgCgBIgBgBIgDAAIgBAAIgBgBIgBAAIgBABIgCAAIgBAAIgHADIgDABIgCABIAAAAIgBABIgCABIAAAAIgBAAIAAABIgDACIgLAMIgBAAIgBABIABrBIgKAAIgBLCIgBAAIAAAAIgBgBIgCgBIAAAAIAAAAIAAgBIgBgBIgEgFIgBgCIgDgDIgBgCIgBgBIAAAAIgBgBIgCgCIgBAAIgBAAIgBAAIgBgBIgBAAIAAABIgCAAIgBAAIgCABIgBAAIgCABIgCACIgBAAIAAAAIAAABIgBAAIAAAAIgCADIgEADIgBACIgBABIgBACIgGALQgCADACADIAFAMIABABIAAABIAAAAIAHAJIABAAIAAABIAAAAIABAAIACACIACABIAAAAIADACIABAAIABAAIAFAAIAAAAIADgCIAAAAIABgBIABAAIABgCIAKgLIAAAAIAAgBIACgBIABgBIABAAIABAAIAAHMIhYAAIAAynIKfgCIAASoIgFABgADmJUIAKAAIgBynIgKAAgAAFJUIAKAAIgCymIgKAAg");
	this.shape_2.setTransform(-33.825,-0.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bankDoor_mc, new cjs.Rectangle(-67.4,-60,67.2,119.5), null);


(lib.shoulder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arm
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAthsIgJDYAgshrIAFDY");
	this.shape.setTransform(-42.075,24.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D0000").s().p("AgshPIAAgFQAAgVANgPQANgQASAAIABAAIAAAAQASAAANAPQAOAPgBAWIAAAEIgJDZIhLAAg");
	this.shape_1.setTransform(-42.0967,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,7.8,10.899999999999999,28.400000000000002);


(lib.neck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgdgvIA7AAIAABfIg7AAg");
	this.shape.setTransform(0,-4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE3D5").s().p("AgdAwIAAhfIA7AAIAABfg");
	this.shape_1.setTransform(0,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-10.6,7.9,11.6);


(lib.elbow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cuff
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgngMIBQgBIAAAaIhQABg");
	this.shape.setTransform(22.65,51.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D0000").s().p("AgngMIBQgBIAAAaIhQABg");
	this.shape_1.setTransform(22.65,51.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// arm
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAmhdQABAJgBACIgGCvQgDAMgEAFQgDAFgDADQgFACgGABQgHABgIgBQgJgDgCgBQgCgCgDgFQgEgFgEgLIgGiwQAAgBAAgJQgBgIALgKQAMgKAQAAIAAAAQAPAAALAJQAKAJABAJg");
	this.shape_2.setTransform(22.847,40.5875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D0000").s().p("AgHB5IgLgEIgFgHQgEgFgEgLIgGiwIAAgKQgBgIALgKQAMgKAQAAIAAAAQAPAAALAJQAKAJABAJQABAJgBACIgGCvQgDAMgEAFQgDAFgDADIgLADIgIAAIgHAAg");
	this.shape_3.setTransform(22.847,40.5875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,27.5,10.099999999999998,26.799999999999997);


(lib.l_waist = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clasp
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgFgBIAKAAQADABgDACIgKAAg");
	this.shape.setTransform(-16.2,-7.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6A600").s().p("AgFACIAAgDIAKAAQABAAAAABQABAAAAAAQAAAAgBABQAAAAgBABg");
	this.shape_1.setTransform(-16.2,-7.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// buckle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAKgJIAAAFIAAAKIAAAEIgFAAIgMAAIgBgEIANAAIAAgKIgNAAIgBgFIATAAIAAAAIAAAFIAAAAAAKAGIAAAAIAAAEIgFAA");
	this.shape_2.setTransform(-16.35,-7.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A6A600").s().p("AAFAKIgMAAIgBgEIANAAIAAgKIgNAAIgBgFIATAAIAAAFIAAAKIAAAEIgFAAIAFAAIAAgEIAAAAIAAAEgAAKgEIAAgFIAAAAIAAAFgAAKgEg");
	this.shape_3.setTransform(-16.35,-7.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// holes
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AACAAQAAABgBABQAAAAgBAAQAAAAgBAAQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAAAABQABAAAAAAgAAUAAQAAABAAABQgBAAgBAAQgBAAAAAAQgBgBAAgBQAAAAABAAQAAgBABAAQABAAABABQAAAAAAAAgAgPAAQAAABgBABQAAAAgBAAQgBAAgBAAQAAgBAAgBQAAAAAAAAQABgBABAAQABAAAAABQABAAAAAAg");
	this.shape_4.setTransform(-14.875,-7.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AARACIgBgCIABAAIABgBIACABIAAAAIAAACIgCAAIgBAAgAgBACIAAgCIAAAAIABgBIABABIABAAIgBACIgBAAIgBAAgAgTACIAAgCIAAAAIACgBIABABIABAAIgBACIgBAAIgCAAg");
	this.shape_5.setTransform(-14.875,-7.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// loops
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AAlgLIAGAAIAAAXIgGAAgAgqgLIAGAAIAAAXIgGAAg");
	this.shape_6.setTransform(-7.875,-7.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#708DAE").s().p("AAlAMIAAgXIAGAAIAAAXgAgqAMIAAgXIAGAAIAAAXg");
	this.shape_7.setTransform(-7.875,-7.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// belt
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("AhegIIC9AAIgBARIi6AAg");
	this.shape_8.setTransform(-7.875,-7.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#453530").s().p("AhcAJIgCgRIC9AAIgBARg");
	this.shape_9.setTransform(-7.875,-7.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// pockets
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AhMgsIAEA5QAAAXgHgBAAvgrIAABSIAhAAAgkgrQgFBMAoAM");
	this.shape_10.setTransform(-7.625,-3.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// line
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBA7QgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgHgBgEIAAgBIgBgPIAAAAIAAgUIAAAAIABgVIAAAAIADgVQABgIgEgHQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAGAJgCAMIgDAVIgBATIAAABIAAATIAAABIABAOQACAFgCAKQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgCABIgBAAg");
	this.shape_11.setTransform(-7.4301,-2.6691);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// waist
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AhJA2IgThsIC5AAIgNBt");
	this.shape_12.setTransform(-7.85,-2.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#708DAE").s().p("AhJA2IgThsIC5AAIgNBtg");
	this.shape_13.setTransform(-7.85,-2.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-9.5,20.900000000000002,13.8);


(lib.l_torso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Collar
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhSADICZgqQARAhgIAMIiQAig");
	this.shape.setTransform(1.1133,-32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D0000").s().p("AhSADICZgqQARAhgIAMIiQAig");
	this.shape_1.setTransform(1.1133,-32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Body
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhNiaICmgKQAPCrgJCeIi4gBQgWihAiidg");
	this.shape_2.setTransform(0.4756,-16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D0000").s().p("AhZCkQgWihAiidICmgKQAPCrgJCeg");
	this.shape_3.setTransform(0.4756,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-37.7,21.700000000000003,38.7);


(lib.l_knee = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cuff
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhAgMICBAAIAAAZIiBAAg");
	this.shape.setTransform(1.625,99.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#708DAE").s().p("AhAANIAAgZICBAAIAAAZg");
	this.shape_1.setTransform(1.625,99.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// line
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgECCQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgaIAAgBIAAgMIAAAAIgBgSIAAAAIABgXQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIgBAWIAAABIABARIAAABIAAANIABAaQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAIAAAAIgEgBgAgEAmQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgUIAAgBIABgPQABgIgBgOIgBgXQgBgLADgKIAAgBQADgIAAgKIAAgBQAAgKgDgIQgCgIAAgLQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAJACAHQADAKAAALIAAAAQAAANgEAKIAAAAQgCAIABAJIABAYQABAOgBAJIgBAPIAAAUQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAAAgBAAIAAAAIgDgBg");
	this.shape_2.setTransform(2.1285,84.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// calf
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ABChiIgJEKAg2CnIgMkLQABgbATgUQAUgUAaAAIABAAQAcAAASAPQARAPADAl");
	this.shape_3.setTransform(1.475,82.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#708DAE").s().p("Ag2CnIgMkLQABgbATgVQAUgTAaAAIABAAQAcAAARAPQASAPADAlQAAABAAABQAAAAAAABQAAAAAAAAQgBAAAAgBIgJEKg");
	this.shape_4.setTransform(1.4894,82.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,64.3,15.399999999999999,37.10000000000001);


(lib.l_hip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAACSQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgMIAAgBIgBgQQgBgNABgIIABgUIAAgVIAAgSQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABABAAQAAABAAAAIAAASIAAAVIgBAVQgBAIABALIABARIAAAAIAAANQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABIgDABIAAAAgAAAAYQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgUQgBgNACgKIAAAAQACgHgBgKQgCgMABgJIACgSQAAgIgBgKIAAAAQgBgLAAgLIAAgTQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAJgBALIABAVQABAKAAAJIgCATQgBAIACAKQACANgDAJQgCAIABALQABALAAAKQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABIgDABIAAAAg");
	this.shape.setTransform(-71.9694,73.8983);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// thigh
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhFCxIgIkXQAAgfAXgXQAUgUAegBQACgBACAAIAAAAQACAAABABQAeABAWAUQAXAXAAAgIAAABQAAADgBADIgOER");
	this.shape_1.setTransform(-72,70.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#708DAE").s().p("AhDCyIAAgCIgBAAIgIkWQAAggAWgWQAVgVAdgBIAEgBIAAAAIAEABQAdABAWAVQAWAWAAAgIAAABIAAAGIgOERIgBABIgBgBIAAACQg9gkhDAig");
	this.shape_2.setTransform(-72,70.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,51.4,17.5,37.800000000000004);


(lib.l_head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ribbon
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhegWQBiAIBjANIgDAYQg4gFg6gHQgMgCgMgCQgfgEghgEg");
	this.shape.setTransform(3.45,-19.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1D6D0").s().p("AgPALIgXgEIhAgIIAHgVQBjAIBiANIgCAYQg4gFg7gHg");
	this.shape_1.setTransform(3.45,-19.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Top
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhRgpQB6gTA2ApQAJAhgJAiIjBgWQgEghAVgig");
	this.shape_2.setTransform(3.8181,-22.2861);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9A6C52").s().p("AhiAaQgEghAVgiQB6gTA2ApQAJAhgJAig");
	this.shape_3.setTransform(3.8181,-22.2861);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Brim
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AC+AaIhKgcIjAgYIhTgDQgWACgIAIQAgAGAeAEQAfAEAWAHIBVATIBvAJg");
	this.shape_4.setTransform(1.3875,-17.0625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9A6C52").s().p("AALAVIhVgTQgWgHgfgEQgegEgggGQAIgIAWgCIBTADIDAAYIBKAcIhEAEg");
	this.shape_5.setTransform(1.3875,-17.0625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Hair
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AACArQABAGADALQAGgBACAAQABAAAEACIgDgGAg+hGQgEAKAAAPQAAAQAJAdQgVBPBUgTAA6AfIgDgCAATA9QACABANAJIAUAAQALgGgJgcIAIACIgGgIIAJACQgOgYgGgcQAGAKAGAAIgWg0");
	this.shape_6.setTransform(9.325,-7.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBDBDB").s().p("AAiBHIgPgJIgDgHIADAHIgFgCQgCgBgGACQhUASAVhOQgJgdAAgQQAAgQAEgJQAugFA1ANIAWA0QgGABgGgKQAGAbAOAYIgJgCIAGAJIgIgDQAJAdgLAFgAAGA9IgEgRIAEARgAA6AfIgDgCg");
	this.shape_7.setTransform(9.325,-7.2861);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Mustache
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AArACQAGAOgDAWQgGgMgGgEQgGgEgNgMQgOgMgagBQgbgBAHgPQAGgPAMABQALABASAFQAUAFAHAHQAIAIAGANg");
	this.shape_8.setTransform(-3.8884,-4.002);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DBDBDB").s().p("AAiAWQgGgEgNgMQgOgMgagBQgbgBAHgPQAGgPAMABQALABASAFQAUAFAHAHQAIAIAGANQAGAOgDAWQgGgMgGgEg");
	this.shape_9.setTransform(-3.8884,-4.002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Beard
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgQBjIAEASQAQgkAcgVQgJAOAGAMIAjhHQAFAEAFgtQgDgHALgGIAAgQQgDgYABgKQAAgLABgGQAHgIgFgQQgOASgXAJQgLAMgWAEQgjAPgXgNQgmAkAJA5AhNAnIAFgIAhFAAQgFAEAAAEQAAABAAAAQgFAPABADQAAAEABAIQABADgDAXQAEAVgJAtQAjgGAZgcIACAPIAGgNIAAgG");
	this.shape_10.setTransform(-1.7163,1.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DBDBDB").s().p("AhPBBQADgXgBgDIAFgIIgFAIIgBgMQgBgDAFgPIAAgBQAAgEAFgEQgFAEAAAEQgJg5AmgkQAXANAjgPQAWgEALgMQAXgJAOgSQAFAQgHAIIgBARQgBAKADAYIAAAQQgLAGADAHQgFAtgFgEIgjBHQgGgMAJgOQgcAVgQAkIgEgSIAAgGIAAAGIgGANIgCgPQgZAcgjAGQAJgtgEgVg");
	this.shape_11.setTransform(-1.7163,1.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Eye
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AgYADQAdgfAUAn");
	this.shape_12.setTransform(-2.25,-12.1861);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Nose
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AAWAwIg0AAQgRgJAIgZQAWgTAYgQQAAAAALgWQAbgIgDAJ");
	this.shape_13.setTransform(-8.1476,-12.4735);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE3D5").s().p("AgiAwQgQgJAIgZQAVgTAZgQIALgWQAagIgDAJQAWBDgpAXg");
	this.shape_14.setTransform(-7.7772,-12.4735);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Face
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE3D5").s().p("Ag1A1QgVgVAAggQAAgeAVgXQAWgVAfgBQAfABAWAVQAXAXAAAeQAAAggXAVQgWAXgfAAQgfAAgWgXg");
	this.shape_15.setTransform(-1.2,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// UnderBrim
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AjSgjQAoAYAoALQAoAKBlAOQBnAPAZAEQAZAFApgFQAMgDgKgNQgWgOgmgJIlDgwQgSAAgQAJg");
	this.shape_16.setTransform(3.3773,-15.4683);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6B4831").s().p("ACLArIiAgTQhlgOgogKQgogLgogYQAQgJASAAIFDAwQAmAJAWAOQAKANgMADQgXACgRAAQgPAAgLgCg");
	this.shape_17.setTransform(3.3773,-15.4683);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-28.1,44.2,43.3);


(lib.l_hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Fingers
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAKgTIAAAlAgJgVIAAAr");
	this.shape.setTransform(0.2,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Thumb
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AARAGIgMAOQgVAPAAgZIAggi");
	this.shape_1.setTransform(-4.6756,4.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3D5").s().p("AgaAKIAfgjQArAMgqATIgLANQgIAGgFAAQgIAAAAgPg");
	this.shape_2.setTransform(-3.6463,4.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Hand
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgcgyIA5AAIAABZQgdAXgcgXg");
	this.shape_3.setTransform(0.025,5.0819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE3D5").s().p("AgcAnIAAhZIA5AAIAABZQgOAMgPAAQgOAAgOgMg");
	this.shape_4.setTransform(0.025,5.0819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-1,11.3,12.2);


(lib.l_foot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("ABZAAIixAB");
	this.shape.setTransform(-8.775,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,2,1).p("AgeAAIA9AA");
	this.shape_1.setTransform(-3.575,8.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhQAyQgigOAZgcIBVgKIAEgsIBggDQAKAwgJAy");
	this.shape_2.setTransform(-9.5563,2.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8C5233").s().p("AhZAJIBVgKIAEgtIBggDQAKAwgJAyIixABQgigOAZgbg");
	this.shape_3.setTransform(-9.5563,2.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.6,-3.3,22.200000000000003,12.8);


(lib.tie = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#252525").ss(1,1,0,3).p("AgbgyIA3AAIAABlIg3AAg");
	this.shape.setTransform(0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D5D6E8").s().p("AgbAzIAAhlIA3AAIAABlg");
	this.shape_1.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-6.1,7.5,12.2);


(lib.Platform = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#313131").ss(0.5,1,0,3).p("ABGiKIAAEVACiiHIACEQAB4iKIACEVAAWiKIgFESAhDiKIgDENAhviKIgIENAibiKIgIESAgZiKIgFEV");
	this.shape.setTransform(2.95,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Plate
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0B0B0B").ss(1,1,0,3).p("AjHiKIGTgCIACEYImbgEg");
	this.shape_1.setTransform(2.8218,0.1512);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C2C2C2").s().p("AjNCIIAGkRIGTgCIACEYg");
	this.shape_2.setTransform(2.825,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Platform, new cjs.Rectangle(-23.6,-15.4,60.9,30.6), null);


(lib.elevatorWindow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F5F5F").ss(2,2,1).p("AlOAAIKdAB");
	this.shape.setTransform(18.625,-49.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elevatorWindow, new cjs.Rectangle(-15.8,-50.2,68.9,2.200000000000003), null);


(lib.elevatorCar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#828200").ss(3,1,1).p("AEjlXIAGAAQAvACAAAwIAAJLQAAAwgvACIgGAAIpFAAIgGAAQgvgCAAgwIAApLQAAgwAvgCIAGAAg");
	this.shape.setTransform(7.225,48.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,0,3).p("AhyrcIB/AAIA0AAQAyAAAAAyIAAVVQAAAygyAAIizAA");
	this.shape_1.setTransform(-53.6,87.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AqMrBIAAhZQAAgyAyAAIS0AAQAzAAAAAyIAAY1QAAAygzAAIy0AAQgyAAAAgyIAAgj");
	this.shape_2.setTransform(0.15,84.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8A7901").s().p("AhELWIAA2sICCAAIAHWsg");
	this.shape_3.setTransform(-58.425,87.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#252525").s().p("AgoLYIgH2sIAAgFIBAAJQAfAEAAAeIgEVmQAEAegkADg");
	this.shape_4.setTransform(-47.425,86.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(157,157,157,0.098)").s().p("AkiFYQgvgCAAgwIAApLQAAgwAvgCIJFAAQAvACAAAwIAAJLQAAAwgvACg");
	this.shape_5.setTransform(7.225,48.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7B700").s().p("ApaNNQgxAAAAgyIAAgjIC0AAQAxAAAAgyIAA1UQAAgygxgBIg0AAIiAAAIAAhZQAAgyAxAAIS0AAQAzAAAAAyIAAY1QAAAygzAAgAkQhBQAAAxAvACIAGAAIJEAAIAGAAIADAAQAzAAAAgzIAApLQAAgygzAAIgDAAIgGAAIpEAAIgGAAQgvACAAAwIAAJLgAjhgOQgvgCAAgxIAApLQAAgwAvgCIAGAAQgvACAAAwIAAJLQAAAxAvACgAjbq+g");
	this.shape_6.setTransform(0.15,84.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.1,-1,132.5,171);


(lib.btnTemplate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Button
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#101439").ss(4,1,1).p("AvgjXIfBAAQAeAAAAAeIAAFzQAAAegeAAI/BAAQgeAAAAgeIAAlzQAAgeAeAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#535EBE").s().p("AvgDXQgeAAAAgeIAAlxQAAgeAeAAIfBAAQAeAAAAAeIAAFxQAAAegeAAg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#98A1FF").s().p("AvgDXQgeAAAAgeIAAlxQAAgeAeAAIfBAAQAeAAAAAeIAAFxQAAAegeAAg");
	this.shape_2.setTransform(0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#025501").ss(4,1,1).p("AvgjXIfBAAQAeAAAAAeIAAFzQAAAegeAAI/BAAQgeAAAAgeIAAlzQAAgeAeAAg");
	this.shape_3.setTransform(0.025,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#690000").ss(4,1,1).p("AvgjXIfBAAQAeAAAAAeIAAFzQAAAegeAAI/BAAQgeAAAAgeIAAlzQAAgeAeAAg");
	this.shape_4.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.2,-23.5,208.5,47.1);


(lib.tunnel_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// End
	this.instance = new lib.end_mc();
	this.instance.setTransform(-685.5,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Lights
	this.light5 = new lib.light("synched",0);
	this.light5.name = "light5";
	this.light5.setTransform(-1234.75,-20.75,1,1,0,0,0,-31.8,119.7);

	this.tie = new lib.tie("synched",0);
	this.tie.name = "tie";
	this.tie.setTransform(-716.05,-103.2);

	this.tie_1 = new lib.tie("synched",0);
	this.tie_1.name = "tie_1";
	this.tie_1.setTransform(-334.9,-103.85);

	this.tie_2 = new lib.tie("synched",0);
	this.tie_2.name = "tie_2";
	this.tie_2.setTransform(36.1,-103.2);

	this.light4 = new lib.light("synched",0);
	this.light4.name = "light4";
	this.light4.setTransform(-1043.6,-20.75,1,1,0,0,0,-31.8,119.7);

	this.light3 = new lib.light("synched",0);
	this.light3.name = "light3";
	this.light3.setTransform(-663.75,-20.75,1,1,0,0,0,-31.8,119.7);

	this.light2 = new lib.light("synched",0);
	this.light2.name = "light2";
	this.light2.setTransform(-289,-20.75,1,1,0,0,0,-31.8,119.7);

	this.light1 = new lib.light("synched",0);
	this.light1.name = "light1";
	this.light1.setTransform(89.6,-20.75,1,1,0,0,0,-31.8,119.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.light1},{t:this.light2},{t:this.light3},{t:this.light4},{t:this.tie_2},{t:this.tie_1},{t:this.tie},{t:this.light5}]}).wait(1));

	// Beams
	this.endL = new lib.beamEnd("synched",0);
	this.endL.name = "endL";
	this.endL.setTransform(-1048.9,-17.35,0.7241,0.7247,0,0,0,184.6,-0.5);

	this.beam6 = new lib.beam("synched",0);
	this.beam6.name = "beam6";
	this.beam6.setTransform(-904.15,-25.8,1,1,0,0,0,119.4,-0.3);

	this.beam5 = new lib.beam("synched",0);
	this.beam5.name = "beam5";
	this.beam5.setTransform(-715.5,-25.8,1,1,0,0,0,119.4,-0.3);

	this.beam4 = new lib.beam("synched",0);
	this.beam4.name = "beam4";
	this.beam4.setTransform(-521.15,-25.8,1,1,0,0,0,119.4,-0.3);

	this.beam3 = new lib.beam("synched",0);
	this.beam3.name = "beam3";
	this.beam3.setTransform(-332.5,-25.8,1,1,0,0,0,119.4,-0.3);

	this.beam2 = new lib.beam("synched",0);
	this.beam2.name = "beam2";
	this.beam2.setTransform(-150.15,-25.8,1,1,0,0,0,119.4,-0.3);

	this.endR = new lib.beamEnd("synched",0);
	this.endR.name = "endR";
	this.endR.setTransform(181.35,-17.35,0.7241,0.7247,0,0,180,184.6,-0.5);

	this.beam1 = new lib.beam("synched",0);
	this.beam1.name = "beam1";
	this.beam1.setTransform(37.9,-25.8,1,1,0,0,0,119.4,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.beam1},{t:this.endR},{t:this.beam2},{t:this.beam3},{t:this.beam4},{t:this.beam5},{t:this.beam6},{t:this.endL}]}).wait(1));

	// Coloring
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ECVegAOIgMEOEB72gCyIAAhHICRAAEiVdgD/MERTAAG");
	this.shape.setTransform(-433.6375,107.1875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#80563B").s().p("EiVmABtIB4gGIAsgNITGAHIPogTIJzAGIKMgNICxgMMA+CAATIAfAZIHPgsIfcAfMAq1gAZISsAZIW9gfIFQASICrgfQC9gRFvAUIJAhcQPQg6MSAWIgHEfIAAADIAfAFIgfAAIAABOIpFADMh3/gAlMipqAAsgEiVmgEvMERTAAFIAABHIn0ANIgtgTIzGgGIvoATIpzgHIqMANIixANMg+AgATIgggaInOAtI/dggMgq1AAZIytgZI29AgIhFggIm1AsItwANg");
	this.shape_1.setTransform(-432.6875,112.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Ground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ECVYgAfIAAEpMkquAAAEiVXgEJMETlAAF");
	this.shape_2.setTransform(-434.25,108.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#98725A").s().p("EiVWAEKIgBoTMETlAAGIAADkIXKAAIAAEpg");
	this.shape_3.setTransform(-434.25,108.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Texture
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#787878").ss(1,1,0,3).p("EBPogRfIgyBOIARAnIA2AgIBGBaEBQlgR1IgngEIkXASIhkgcEBD4gSkIgeASIFbGBIAAAPIAuArIB1BKIggAkIgGBDQgJAFgQACQgEABgEAAIguAuIggA9IiCBDEBIOgCQIAVgOICFAIIB0gIEBLGgFTIAwBZICpCAIAIAPIB7B0EBZvgNjIDIgqIE3kWEBZXgD5ICzhlQAAgHAGgGQAEgDAEgCIAnirIAAgqIhOg9IglgOIhthLEB/UAA3IgejHIgggOIh7kLIjCkBIh7h5IAfiPIgOhnQADgHgSgBQgFgBgDgCIAOhOIhrg8IgfgsQgDgCgDgCEBj/gNXIgmAnIBeAyIAnBVIBNBBIjJByIg+A8EBoHgIeIgYCWIhEArIAPD6IAeAVIgXBuIGKFVECJDgTdIhXBLIguAOIgIChIgnAVIg2CHIg/A5QgHAEgRAAQgHAAgIAAIg/AjQgbBwjqAUIg/A9IhkAjECMVgDlQAYAAAkgQQACAAAAgCIEXAAIBxgjECSzAAXQgYAAglAPQgBABAAACIkYAAIiZAvIngAVQkOgdkpAJQjXAHijA0IhVAjECDDATlIAWirIhbhZIghiBIhxgyIgwlvIAYgSIgei9IAehjEByxAEOIiOAgIjSBWIgUBLIAcAjIAAAOIAgAWQAbABARgGQABAAAAgCIBGgDQAFgCAEgCQAFgCAEgBIBzgLIAegMIBmgCEBpMAQUID4hdICihvIAPjnIgXggIhMgSIgZgSEBlqASqIAfgTIlcmBIAAgOIgugqIh0hLIAfgkIAIhDQAHgEAQgDQAEgBAEAAIAuguIAfg9ICFhEEBhVACVIgVAOIiGgHIh0AHEBY+AR6IAnAEIEVgRIBlAcEBecAFYIgvhYIiqiBIgJgOIh6h1EBQLAD/IizBlQAAAHgHAGQgEADgDABIgnCrIAAArIBOA9IAnAOIBqBKEBFjANcIAmgmIhegyIgnhVIhNhBIDJhyIA/g9EBP0ANpIjJAqIk3EWEBZ7ARlIAvhOIgPgnIg2ghIhGhZA8Nj8ICyhkQAAgIAHgGQAEgCAEgCIAmirIAAgrIhNg9IgngNIhrhLA72tlIDIgrIE4kWAxmtaIglAnIBeAyIAmBVIBOBBIjJByIg/A8AtdohIgYCWIhEArIAND6IAgAVIgYBuIGKFWAJvA0IggjHIgfgOIh6kLIjCkBIh8h5IAgiPIgOhnQACgHgSgBQgFgBgEgCIAPhOIhrg8IgegsQgCgCgDgCATdzgIhXBLIguAPIgICgIgnAWIg2CHIg+A5QgIADgQAAQgHAAgHAAIhAAkQgbBvjrAUIg+A9IhkAjEAmfgTfIgWCrIBbBZIAgCBIByAxIAxFvIgYASIAVB+QCFAECMgEQDYgHCkgzIBVgkAWvjoQAZAAAlgQQABAAAAgCIEXAAICZgvIHhgVQCOAPCXAFIAJA/IgfBjEA2ygEIICOghIDRhWIAVhKIgdgkIAAgOIgggVQgZgCgTAGQgBABAAACIhHADQgDACgFACQgFABgEACIhyALIggALIhlADEBAVgQOIj1BcIikBvIgPDoIAXAgIBNARIAYASEhslAAxIggjGIgfgPIh6kLIjDkBIh7h5IAfiPIgNhnQACgHgSgBQgFgBgEgCIAQhOIhsg8IgfgsQgCgCgEgCEiDygIjIgYCWIhFAqIAOD6IAgAVIgYBuIGKFWEhi4gTjIhWBLIguAPIgICgIgoAWIg1CHIg/A5QgHADgRAAQgHAAgHAAIg/AkQgbBvjrAVIg+A8IhkAkEhflgDrQAYAAAlgPQABgBAAgCIEYAAICZguIHggWQCOAPCYAFIAIA/IgeBjEhP1gTiIgWCrIBbBZIAgCBIBxAxIAyFvIgZASIAWB+QCEAFCNgFQDXgGCkg0IBVgkEg1+gQRIj4BcIiiBvIgPDoIAWAgIBNARIAYASEg/jgELICNghIDShWIAVhKIgcgkIAAgOIghgVQgagCgRAGQgCABAAACIhGADQgEACgEACQgFABgEACIhzALIgfALIhmADEglwgR4IgngEIkWASIhkgcEgmtgRiIgxBOIARAnIA1AgIBGBaEgycgSmIgfARIFbGCIAAAOIAuArIB1BKIggAkIgHBDQgHAFgRACQgEABgDAAIgvAuIgfA9IiDBDEguHgCSIAVgPICGAIIB0gIEgrPgFWIAvBZICrCAIAHAPIB8B0EgmKAD8IizBkQAAAIgHAGQgEACgDACIgmCrIAAArIBNA9IAmAOIBsBKEgmhANlIjJArIk3EWEg07AIhIAZiWIBEgrIgOj6IgegVIAXhuImJlWEgwyANaIAngnIhegyIgnhVIhOhAIDJhyIBAg9EhMGgA1IAeDHIAgAPIB7ELIDCEBIB7B5IgfCPIANBnQgCAIARAAQAGABADACIgOBOIBrA9IAeArQACACAEACEhV1AThIBXhMIAtgOIAJihIAngVIA2iIIA+g5QAHgEARAAQAIAAAIAAIA+gjQAbhvDrgVIA+g8IBkgkEhZHAASQgYAAglAPQgCABAAACIkXAAIiZAuInfAVQkOgckpAIQjZAHiiA0IhVAjEho3ATfIAWirIhbhZIggiAIhygyIgwlvIAYgSIgfi9IAghkEh5KAEIIiMAhIjSBVIgWBLIAeAkIAAAOIAfAVQAaACASgGQABgBAAgCIBHgDQADgCAEgBQAGgDADgBIB0gLIAfgLIBlgDEiCuAQOID3hdICihuIAPjoIgVgfIhOgSIgYgSEBBaAIjIAYiWIBFgqIgOj7IgfgVIAYhtImKlWEAqOgAyIAfDHIAfAPIB8ELIDBEBIB7B5IgeCOIAOBnQgCAIAQABQAFABAEABIgPBPIBrA8IAfAsQADACADACEAgfATjIBYhMIAtgNIAIiiIAngVIA1iHIA/g5QAIgDAQAAQAIAAAIAAIA+gkQAchvDrgVIA/g8IBjgkAdNAUQgYAAglAPQgCABAAACIkXAAIiYAvInhAVQkNgdkpAJQjZAHihA0IhVAjANdTiIAWirIhchZIgeiAIhzgyIgwlwIAYgRIgfi+IAghjAi1ELIiMAgIjSBXIgWBLIAfAjIAAANIAeAWQAaABATgFQABgBAAgCIBHgDQADgCADgCQAGgBADgCIBzgLIAggLIBlgEAsYQQID3hbICihvIAOjoIgVgfIhOgSIgYgSA0QCSIgWAOIiEgHIh1AHA3JFWIgvhZIiqiAIgIgPIh7h0Av7SmIAggRIldmBIAAgPIgugrIh0hLIAggjIAHhEQAIgDAQgDQADgBAEAAIAuguIAgg9ICDhDA8mR4IAlAEIEYgSIBjAcA7qRjIAwhPIgPgnIg3ggIhGhZEiH7gNdIgmAnIBfAyIAmBWIBNBAIjIByIhAA8EiSjgD/ICzhkQAAgIAHgGQAEgCAEgCIAnirIAAgrIhOg9IgngNIhrhLEiSLgNoIDIgrIE4kWEiKlACPIgWAOIiEgHIh1AHEiGQASkIAfgSIlcmCIAAgOIgtgqIh1hLIAggkIAHhDQAIgEAPgDQAEgBAEAAIAvguIAfg9ICChEEiNdAFSIgwhYIiqiAIgIgPIh7h0EiR/ARgIAwhPIgQgnIg2ghIhFhZEiS8AR0IAmAFIEXgSIBkAc");
	this.shape_4.setTransform(-438.1,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Tunnel
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#858585").s().p("EiU5gTrMEp2AAHMgADAnMMkp2AADg");
	this.shape_5.setTransform(-436.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tunnel_mc, new cjs.Rectangle(-1391.2,-125.5,1916.1,268), null);


(lib.town = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {OpenDoor:1,CloseDoor:25,"OpenDoor":48};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(25));

	// Roof
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("ASUhUIBjAAASUhUIAAhGAT8AAIAVAAAT8CbIAAhMIAuAAASUBPIAAhPIBoAAIAAhCASUBPIBoAAAI2hUIAAhGAI2hUIBoAAIBcAAIBoAAIBiAAIAAhGAFshUIAAhDAFshUIBoAAIBiAAAFsBPIAAhPIBoAAIBiAAIBoAAIAAhUAFsBPIBoAAIBiAAIBoAAIBcAAIBoAAIBiAAIBoAAIBoAAAHUCbIAAhMAKeCZIAAhKAI2BPIAAhPAHUAAIAAhUAPEhUIBoAAIBoAAAL6hUIAAhDAL6AAIBoAAIAAhUANiCbIAAhMAL6BPIAAhPAQsCZIAAhKAPEAAIBoAAIAAhUAPEBPIAAhPANiAAIBiAAAKeAAIBcAAAj7hUIAAhGAj7hUIBoAAIBmAAIAAhDAnFhUIAAhDAnFhUIBoAAIBiAAAnFBPIAAhPIBoAAIBiAAIBoAAIAAhUAnFBPIBoAAIBiAAIBoAAIBmAAIAAhPIBnAAIAAhUIBiAAIAAhGAldCbIAAhMAiTCZIAAhKAj7BPIAAhPAldAAIAAhUACchUIBoAAIBoAAAgthUIBnAAAgtBPIBnAAIBiAAIBoAAIBoAAAA6CbIAAhMAEECZIAAhKACcAAIBoAAIAAhUACcBPIAAhPAA6AAIBiAAAiTAAIBmAAAEEAAIBoAAAwjhUIAAhEAwjhUIBoAAIBiAAIBoAAIBiAAIAAhGAzshUIBnAAIBiAAAztAAIBoAAIBiAAIBoAAIAAhUAyFCbIAAhMIBiAAIBoAAIBiAAIAAhPIBoAAIAAhUA0MAAIAfAAAztBPIBoAAAztBPIAAhPAu7CZIAAhKAwjBPIAAhPAyFAAIAAhUAqPhUIBoAAIBiAAAtZhUIAAhDAtZBPIBoAAIBiAAIBoAAIBiAAArxCbIAAhMAonCZIAAhKAqPAAIBoAAIAAhUAqPBPIAAhPArxAAIBiAAAu7AAIBiAAA0pBPIA8AAAonAAIBiAAAQsAAIBoAA");
	this.shape.setTransform(534.3375,79);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AVGCeIgZhRIgZhOIgVhDIgGgSIgXhHIhMAAIjQAAImNAAImaAAImYAAImUAAIpFAAIgXBHIggBVIgeBOIgfBRMAqMAAAg");
	this.shape_1.setTransform(534.1,79.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#261911").ss(1,1,1).p("ASerWIgpAAIp4AAIACAFIhTCIIABhTIAkg6ATQqEIAAhPIAyAAIAAXHIgyAAIAA0zIAAgrIAAgaIgBgBIgxhRAVGr0IAAAeIioAAAF6qoIAAgrIAyAAIABA3AH9rWIgsAAIh1AAIgtAAIgDAFIBOCAIAAhXIgeguAlIrWIhsAAIgvAAIgCACIBLB8IAChRIgBAAIAAgJIAAghIAzAAIAAAugAkZrWIABACIhOCBIAAhSAkZrWIgvAAAEvrWIpIAAAmZpSIgBgGIABABgAmYqpIgBgJAlmpTIAABEAmZqpIgbgtAzJo3IAAUsIgyAAIAA3IIAyAAIAABSgAxsrWIgpAAIiwAAIAAgeAxsrWIAEAIIhhCXAnjrWIqJAAAzJqBIA0hVAGspJIAAU9IgyAAIAA1FAlmoMIAAUAIgzAAIAA1GAR1rWIgEAIIBfCP");
	this.shape_2.setTransform(534.075,170.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(92,73,54,0.969)").s().p("AVGCdMgqLAAAIAehQIAehOIAghUIAYhHIJEAAIGUAAIGYAAIGZAAIGOAAIDQAAIAABHIhnAAIhpAAIAAhHIAABHIhiAAIhnAAIAAhEIAABEIhcAAIAABUIhpAAIhiAAIAAhUIAABUIBiAAIAABOIBpAAIBcAAIBnAAIBiAAIBpAAIAABJIAAhJIBnAAIhnAAIhpAAIAAhOIAABOIhiAAIhnAAIAAhOIAABOIhcAAIhpAAIAAhOIBpAAIBcAAIBnAAIBiAAIhiAAIhnAAIhcAAIAAhUIBcAAIBnAAIAABUIAAhUIBiAAIBpAAIAABUIhpAAIBpAAIBnAAIhnAAIAAhUIBnAAIBjAAIAGARIgGgRIAGAAIAAARIAVBDIAZBOIAZBQgAT/CaIAAhNIAuAAIguAAIhpAAIBpAAgAyCCaIAAhNIhpAAIAAhOIAABOIBpAAgANkCYIAAhLgAHWCYIAAhLgAA9CYIAAhLIhoAAIAAhOIBoAAIhoAAIhlAAIBlAAIAABOIhlAAIBlAAIBoAAgAlbCYIAAhLgArvCYIAAhLIhnAAIAAhOIBnAAIhnAAIhjAAIBjAAIAABOIBnAAgAu5CXIAAhKgAKhCWIAAhJgAEGBNIAABJIAAhJIBpAAIBnAAIhnAAIAAhOIBnAAIhnAAIhpAAIBpAAIAABOIhpAAIhnAAIAAhOIhiAAIAAhUIBiAAIhiAAIAABUIBiAAIAABOIhiAAIBiAAgAiQCWIAAhJIhpAAIAAhOIBpAAIAAhUIAABUIhpAAIhiAAIAAhUIAABUIBiAAIAABOIBpAAgAokBNIAABJIAAhJIBiAAIBnAAIhnAAIAAhOIBnAAIhnAAIhiAAIAAhUIAABUIBiAAIAABOIhiAAIhpAAIAAhOIAABOIhiAAIBiAAgASWBNIAAhOIBpAAIAVAAIgVAAIAAhDIAABDIhpAAgAI4BNIhiAAgAj5BNIhiAAgAtWBNIhjAAgAwhBNIBoAAIhoAAIAAhOIBoAAIAAhUIAABUIhoAAIhhAAIAAhUIAABUIBhAAIAABOgAwhBNIhhAAgAzrBNIg8AAgAEGgBIAAhUIBpAAIBnAAIhnAAIAAhEIAABEIhpAAIhnAAIAAhHIAABHIBnAAIAABUIhnAAgArvgBIBiAAIBpAAIhpAAIhiAAIAAhUIAABUgAzrgBIBpAAIhpAAIgeAAgAI4hVIBpAAIhpAAIAAhHIAABHIhiAAIBiAAgAgrhVIBoAAIhoAAIAAhEIAABEIhlAAIBlAAgAj5hVIBpAAIhpAAIAAhHIAABHIhiAAIBiAAgAnChVIBnAAIhnAAIAAhEIAABEgAnChVIhiAAgAqNhVIBpAAIhpAAIAAhHIAABHIhiAAIhnAAIAAhEIAABEIhjAAIBjAAIBnAAIBiAAgAwhhVIBoAAIhoAAIAAhFIAABFIhhAAIBhAAgAyChVIhnAAgAT/BNgAPGBNgACfBNgAj5BNgAqNBNgAzrBNgAgrgBgAnCgBgAtWgBgAyCgBgASWhVIAAhHIBNAAIAWBHgAQvhVgAtWhVgASWicg");
	this.shape_3.setTransform(534.1,79.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(106,76,71,0.969)").s().p("Az7L1IAA3IIAyAAIAABSIA0hVIiwAAIAAgeMAqLAAAIAAAeIioAAIgpAAIApAAIAxBRIABAbIAAAsIAAgsIAAgaIAAhPIAyAAIAAXHIgyAAIAA0yIhfiPIAEgJIp4AAIACAFIhTCJIABhUIAkg6Ih1AAIgtAAIAtAAIAeAuIAABXIhOiAIADgFIpIAAIgvAAIhsAAIgvAAIAvAAIAbAtIABABIgCBQIhLh8IACgCIqJAAIgpAAIApAAIAEAJIhhCWIAAhKIAABKIAAUsgAH9rWIgsAAgAF6L0IAA1FIAAhXIAAgrIAyAAIABA3IgBBUIAAU8gAmZL0IAA1GIAAgFIgBgBIAChQIgBgJIABAJIgBgBIAAgIIAAgiIAzAAIAAAuIAABSIAAhSIAegxIAvAAIABACIhOCBIAABFIAAACIAAUAgAmYqogAmYqog");
	this.shape_4.setTransform(534.075,170.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(49));

	// Merchantile
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(112.85,58.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-0.6,45.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(49));

	// DoorPatch
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#767470").ss(1,2,1).p("AleAAIBLAAIIxABIBBAA");
	this.shape_5.setTransform(534.7,101.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#7F5B36").ss(3,1,1).p("AlPAeIAAg5IA7AAIIxgCIAzAAIAAA7");
	this.shape_6.setTransform(534.775,108.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9D917F").s().p("AFBBGIAAgvIqBAEIAAArIgPAAIAAg6IA7AAIIxgCIAzAAIAAA8gAkUggIABglIIvAAIABAmIoxgBIIxABIAAApIoxACgAEdgfg");
	this.shape_7.setTransform(534.775,104.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(49));

	// BankDoor
	this.bankDoor_mc = new lib.bankDoor_mc();
	this.bankDoor_mc.name = "bankDoor_mc";
	this.bankDoor_mc.setTransform(567.2,166.25,0.9539,0.9797,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.bankDoor_mc).wait(1).to({regX:0.5,regY:0.4,scaleX:0.4438,skewX:-0.4462,skewY:14.6713,x:567.4,y:166.45},23).wait(1).to({regX:0.2,regY:0.2,scaleX:0.9539,skewX:0,skewY:0,x:567.2,y:166.25},23).wait(1));

	// Bank
	this.instance_2 = new lib.CachedBmp_10();
	this.instance_2.setTransform(501.65,30.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_9();
	this.instance_3.setTransform(410.15,21.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(49));

	// Plate
	this.instance_4 = new lib.Platform();
	this.instance_4.setTransform(864.2,237.5,1,0.8368,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49));

	// Shaft
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#252525").s().p("ArnClIAAlJIXPAAIAAFJg");
	this.shape_8.setTransform(949.925,241.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(49));

	// Boardwalk
	this.instance_5 = new lib.CachedBmp_11();
	this.instance_5.setTransform(-0.5,225.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49));

	// WaterTower
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#313131").ss(1,2,1).p("AkZkCIgFgIIgDgFAk7C4IgDAEIgdAjIgFAHAi+BnIhnB9IgPASIgOASIgHAIAFXAnIAMAAAgSAkIFgAD");
	this.shape_9.setTransform(755.3227,151.9867);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8C501B").ss(4,1,1).p("AAAABIgNARAAAABIAMARAAOgRIgOAS");
	this.shape_10.setTransform(723.275,174.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#313131").ss(1,1,1).p("AGCh3ICiAAIAABWIh5AAIhTAAIg0AAIkyAAICxCHIAgAYIAKAHIACADIABAAIB2BbIgajLIhpBmAHMr0IAAAuIhKAAImeAAIlyAAIhIAAIAAguAhLkfIgXAAIksAAIhLAAIAACjAhLkfIAAAAIALAAIALAAIANAAIAMAAIAOAAIGQAAIBcAAIAACiAgPj8IABAAAi3h8IAAiAICoAAAg1kfIgWAAAGCj9IgWAAIAACAAG8h9IAAiAIg6AAIAACGAFKh9IAAiAIh2AAIAACAAHMr0InpkzIm5EzIG5AAgAGCrGIAAGnACyh9IAAiAIigAAIAACAAmOj8IAjAAIAACAAm2h8IAAiAIAoAAAmOkfIAAmnAmOh3IAjAAIAjAAIBvAAIAiAAIB7AAIA9AAIFTAAIANAAIAhAAAnIghIhfAAIAAhWIBOAAIAjAAIAoAAIAAiFAlCghIhSAAIg0AAAlCghIgHBLIAhA7IAHAMAkhBxIAAAAIAFAIIACAEIgCgEAkaB9IAMAUIBPCRIgCkDIAAhAIgEAAIh9AAAlSB4IAQAcIAWAnIBYCYIAUAAIABgxAlSB4IgFA3IAVgbAlgD9IgKBWIgHBJIgIBEIA3BYIAOAVIALATIBoClIAAkiIAAhGIABhKAlXCvIgJBOIA0hCAlJAqIgJBOAl5HgIgGBCIAhA5IANAXIALARIABAAICEDKIAAhIAmULlIBHhaIAHgIAljJhIgpA3IgIBNIgiE3IhRAKIgzgZIBywuAl/IiIgNB2AEsAYIgHgxIgBgIACoCZIClB6IgHgwADNCFIADADAFWFXIgJhEAElgZIiCB/AgOghIguAAIAAARIAAFGIAAAdIAbAAAg8ghIhTAAIgyAAACICCIjEC0Ag8gQIDECSIAgAXIjJC6IF3AEAg8GfIAUAAIATABAg8GfIAAAnIAAEtAjIGdIAHAAACDJRIi/CiIAAAyIAAEDIhTAAIgygBIAAjaAg8HGIC/CLIAmAcIDoCoIgHgyIgmkdIgEgjIgKhMAFUGjIgJAAIinCVIAkAbIDCCQAFkHGIicCNACpJtIjlC4AgoGfIDMCZAg8FTIAABMAjFghIhfCNAgPh9IAAh/AlIh8IAAiAIBvAAIAACAAjBAfIhNByAlqFTICWAAAjIGdIh2CXAlxGcICpABAGrghICQRGIhTAAIg1gJIgikH");
	this.shape_11.setTransform(755.65,114.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D8633C").s().p("AjbCZIG3kxIAAExg");
	this.shape_12.setTransform(730.575,22.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B25030").s().p("Aj0CZIAAkxIHpExg");
	this.shape_13.setTransform(777.125,22.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A1472B").s().p("AiUAXIhIAAIAAgtIG3AAIACAtg");
	this.shape_14.setTransform(730.675,40.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6F2E1B").s().p("ACrAXImdAAIgCgtIHpAAIAAAtg");
	this.shape_15.setTransform(777.125,40.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#787878").s().p("ACKEoIh7AAIAAgGIAAiAICnAAIAACAQAJAFAJAAIAAABgAiCEoIAAgGIAAiAIBwAAIAACAIAAAGgAjHEoIAAiGIAjAAIAACAIAAAGgAjHknIFxAAIAAGmIgNAAIgYAAIgLAAIgWAAIkrABg");
	this.shape_16.setTransform(735.7625,72.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5F5F5F").s().p("ACuEoQAGgCAGgEIAAiAIAVAAIAACGgAixEoIAAgBQAJAAAIgFIAAiAICgAAIAACAQAJAEAIAAQAJAAAIgEIAAiAIB1AAIAACAQAFAEAGACgAjBB/IgNAAIAAmmIGdAAIAAGmg");
	this.shape_17.setTransform(773.5,72.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6A4E4A").s().p("AioKkIAAxJIBSAAIAAhVIA+AAIFTAAIAMAAIAhAAICjAAIAABVIh6AAIhTAAIBTAAICRRGIhUAAIhQphIgBALIAAgQIg/ngIgzAAIkzAAICxCIIAhAYIghgYICDiAIAGAyIhoBmIAJAHIACADIABAAIB3BbIAGAwIilh6IgfgXIjFiTIAAFHIDFi0IAfAXIjJC7IF3ADIAKBLIAFAjIidCNIDDCQIAGAzIjnipIgmgcIjAiLIAAEtIDAiiIAmAcIjmC4IAAgyIAAAyIAAEDgACKC0IAkAbIgkgbICniVIAKAAIgKAAIlfgDIgUgBIDMCZgAhWAbIAAAnIAAgnIAUAAIgUAAIAAhKIAbAAIgbAAIAAgeIAAAegAFGAfIgLAAgAhWmUIAAgRIAuAAIguAAgAmumlIBTAAIgIBNIgJBOIgFA2IgIBOIgKBXIgIBHIgHBFIgHBBIgMB2IgJBOIghE2IhSAKgAhWgvgAFHn6IgMAAQgGgCgFgFIAAh/Ih1AAIAAB/QgIAFgJAAQgIAAgKgFIAAh/IifAAIAAB/QgIAGgJAAQgIAAgJgGIAAh/IABAAIAAgjIGQAAIBcAAIAACiQgWAMgMgMIAAh/Ig6AAIgVAAIAAB/QgGAFgGACgAhlqjIALAAIALAAIgWAAg");
	this.shape_18.setTransform(758.2,152.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8C501B").s().p("AiYKjIAAjaIAAhIIAAkiIhnB9IgMgTIgNgVIADgEIB2iXIAHAAIgHAAIiogBIAHhHICWAAIhZiZIgVgmIgQgcIAIhOIAiA6IABACIAAABIADAEIADAFIAEAIIgEgIIgDgFIBfiOIADAAIgDAAIh9AAIhTAAIgzAAIhfAAIAAhVIBOAAIAAgGIAAijIBLAAIErAAIAXAAIAWAAIAMAAIANAAIANAAIAAAjIgBAAIimAAIAACAIAAAGIB7AAIAABVIhTAAIgzAAIAABCIAAhCIAzAAIAARJgAiYBfIAAhGgAiYAZIAChIgAiWgvIABgyIgDkCIhNBxIBQCRIgBAyIgUAAIAUAAgAjzkKIADAEIALAUIgLgUIgDgEIAAAAIgEgHgAj3kRIgHgNgAj3kRIAAgBgAkfoAIAAAGIBwAAIAiAAIgiAAIAAgGIAAiAIhwAAgAmNn6IApAAIAjAAIAiAAIgiAAIAAgGIAAiAIgjAAIgpAAIAACAIAAAGIgiAAgAoRKJIBzwuIAzAAIhzRHgAHdKYIgjkGIgGgzIgmkdIgEgjIgKhLIgJhEIgHgwIgbjLIgGgyIgBgIIA0AAIA/HgIAAAQIABgLIBQJhgAkcEAIAPgSIAOgSIBnClIAABIgAliEUIAog2IAGgHIgig5IAHhBIA3BXIgcAjIANAXIALARIgHAJIhHBagAiVhhgAkujUIAWgaIAVAmIgzBCg");
	this.shape_19.setTransform(751.475,152.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(49));

	// Ground
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A4836E").s().p("EhP8AEcIgCpAMCf9AAAIgCJJg");
	this.shape_20.setTransform(511.975,228.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(49));

	// Sky
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#9DADD0","#2F467B"],[0.38,1],128.8,193.4,130.3,-207).s().p("EhQAgT6MCgBAAAMgACAnWMif9AAfg");
	this.shape_21.setTransform(512.075,127.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,0.4,1024.8999999999999,258);


(lib.l_miner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Head
	this.instance = new lib.l_head("synched",0);
	this.instance.setTransform(-0.75,-43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// LeftShoulder
	this.instance_1 = new lib.shoulder("synched",0);
	this.instance_1.setTransform(42.8,-40);

	this.instance_2 = new lib.elbow("synched",0);
	this.instance_2.setTransform(-22.3,-37.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// LeftWrist
	this.instance_3 = new lib.l_hand("synched",0);
	this.instance_3.setTransform(0.3,20.5,1,1,0,0,0,0,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Torso
	this.instance_4 = new lib.l_torso("synched",0);
	this.instance_4.setTransform(-0.8,-20.45,1,1,0,0,0,-0.1,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Neck
	this.instance_5 = new lib.neck("synched",0);
	this.instance_5.setTransform(4.05,-42,1,1,0,0,0,0,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Waist
	this.instance_6 = new lib.l_waist("synched",0);
	this.instance_6.setTransform(8.1,3.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// LeftHip
	this.instance_7 = new lib.l_hip("synched",0);
	this.instance_7.setTransform(-0.3,0.2,1,1,0,0,0,-72.9,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// LeftKnee
	this.instance_8 = new lib.l_knee("synched",0);
	this.instance_8.setTransform(0.15,29.75,1,1,0,0,0,1.4,68.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// LeftAnkle
	this.instance_9 = new lib.l_foot("synched",0);
	this.instance_9.setTransform(0.25,60.35,1,1,0,0,0,-4.5,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// RightShoulder
	this.instance_10 = new lib.shoulder("synched",0);
	this.instance_10.setTransform(0.55,-27.45,1,1,44.4832,0,0,-42.2,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// RightElbow
	this.instance_11 = new lib.elbow("synched",0);
	this.instance_11.setTransform(-13.95,-12.3,1,1,68.962,0,0,22.8,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// RightWrist
	this.instance_12 = new lib.l_hand("synched",0);
	this.instance_12.setTransform(-34.1,-5.5,1,1,63.7368,0,0,-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// RightHip
	this.instance_13 = new lib.l_hip("synched",0);
	this.instance_13.setTransform(-0.1,0.4,1,1,8.4409,0,0,-72.7,55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// RightKnee
	this.instance_14 = new lib.l_knee("synched",0);
	this.instance_14.setTransform(-3.75,29.65,1,1,4.8484,0,0,1.8,68.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// RightAnkle
	this.instance_15 = new lib.l_foot("synched",0);
	this.instance_15.setTransform(-4.55,59.15,1,1,0,0,0,-3.5,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-71.4,68.7,142.7);


(lib.shaft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Plate
	this.instance = new lib.Platform();
	this.instance.setTransform(-85.9,229.9,1,0.8368,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Texture
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#535353").ss(1,1,0,3).p("ALfvaIgsgYIgJgMIhegCIgNgLIhPgOIgigRQgCgCAAgFQAAgCAAgCIgVgRQhCgHgLhAIgkgRIgVgbACJuhQAAAHAJAKQABAAABAAIAABMIAbApIANCCQgJAngCApQgDAkADAmQADA6AfAsIAVAXAgeyCIB1gJIAIgIICdgiIBLgaACxpJIgmACIg6gIACdl1IATAmIAzA4IAsAGIAVgIIAHAAIANgIQABgHgEgFQAAgBgBAAIgCgTQgBgBgBgBQgBgBgBgBIgGgfIgHgJIgCgbALfqQIhlgGIg0AZIhMAIIgdAfIjYANIgLgGIhJAGAK8iTIgKgIIjjBeIgJAAIgZANIgrAfIgWgIIgngCQgCgCgCgFQAAgBAAgBIgbgMIglgJIgngjAJkjQIg2hDIhBgsIiJgEIgSAGIgLAVIgKAHAKUA4IgugNIgXAEIgTAPIg0ATAKhBIIACgKIgKhLIAQgbADJgVIg0ANIhMAtIgIACIhEAhABWhHIAIAGIgEAkIAEAeAlAi9IBYAHIAZASICTgEIANgIIBAAGIDJhrACUDhIA7AwQAFAAADACQACABABABIBlALIAYAAIAkgVIAJgLIAsgdAFBHhIhZgHIgZgSIiTAEIgMAIIhAgGIjJBrAH5GZIgXgKIgdAZIgyALIgnAVIhDg3IgjgRAIADnIAZA3ICjBUAgeNzIB1gIIAIgJICdghICXg1IBHghIBVAIIA8gEQAFABAAgFQABgBABgBIAtAEIAkgdIAagJQABAAABgBALfQbIgsgXIgJgNIhegCIgNgKIhPgPIgigRQgCgCAAgEQAAgCAAgCIgVgRQhCgIgLg/IgkgRIgVgbACJRVQAAAGAJAKQABABABAAIAABLIAUAfArexBIBlAGIA0gZIBMgJIAdgfIDYgNIAKAHIBvgJIA7AJAgLsxQAAgGgJgKQAAgBgBAAIAAhLIgcgqIgMiCQAQhGgEhOArer3IAsAXIAJANIBeACIANAKIBPAPIAiARQACACAAAEQAAACAAACIAVARQBBAIAMA/IAkARIAVAbAAepPIh0AIIgJAJIidAhIiXA1IhHAhIhUgIIg8AEQgFgBAAAFQgBABgBABIgugEIgjAdIgaAJQgBAAgBABAn4h1IAXAKIAdgZIAygLIAmgVIBDA3IAkARAiUBCIg7gwQgEAAgEgCQgBgBgBgBIhlgLIgZAAIgkAVIgIALIgsAdAn/A8IgZg3IijhTAqTDrIAuANIAXgEIATgPIA0gTAq7G3IAKAIIDjheIAIAAIAZgNIAsgfIAVAIIAoACQACACACAFQAAABAAABIAbAMIAkAJIAoAjAqgDbIgCAKIAKBMIgQAbApjH0IA2BDIBBAsICJAEIASgGIALgVIAKgHAjIE5IA0gNIBLguIAJgCIBEghAhVFrIgJgGIAFgkIgFgfAicKZIgTgmIgzg4IgsgGIgVAIIgIAAIgMAIQgBAHADAFQABABABAAIACATQABABABABQABABABABIAGAfIAHAJIACAbAreO0IBlAGIA0gZIBMgIIAdgfIDYgNIAKAGIBvgIIA7AIAgLTFQAAgHgJgKQAAAAgBAAIAAhMIgcgpIgMiCQAQhJgFhRQgEg6gegsIgVgX");
	this.shape.setTransform(-0.05,133.1875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shaft
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ArgADIXBgF");
	this.shape_1.setTransform(-0.05,10.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,0,3).p("ALfzfMAAEAm/I3CAAMgADgm5");
	this.shape_2.setTransform(0.1504,134.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B3B3B").s().p("ArfTgMgADgm5IXBgGMAAEAm/g");
	this.shape_3.setTransform(0.15,134.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.4,8.9,184.5,252.1);


(lib.elevatorWindow_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {top:0,windowDown:1,bottom:51,windowUp:52,"bottom":102};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.stop();
	}
	this.frame_102 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(51).call(this.frame_51).wait(51).call(this.frame_102).wait(1));

	// Window
	this.elevatorWindow = new lib.elevatorWindow();
	this.elevatorWindow.name = "elevatorWindow";
	this.elevatorWindow.setTransform(85,486.4,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.elevatorWindow).wait(1).to({y:983.2},50).wait(1).to({y:486.4},50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.7,435.9,69.49999999999999,499.6);


(lib.elevator_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Top:0,elevOpen:1,elevClose:25,elevDown:49,"bottom":99,elevUp:100,"bottom":150};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.stop();
	}
	this.frame_150 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(24).call(this.frame_48).wait(51).call(this.frame_99).wait(51).call(this.frame_150).wait(1));

	// Winch
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,0,3).p("AgmDLIggAAIAAn0ICfAAIAAH0IgZAAgABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPAhLCOQgjgPgdgdQg8g8AAhUQAAhVA8g9QAdgdAjgPAkTEHIInAAIAAAjIonAAgABADLIAAA5IhmAAIAAg5");
	this.shape.setTransform(96.675,370.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#313131").s().p("AgkAlQgQgPAAgWIABgEQABgSAOgOQAQgPAUAAQAWAAAPAPQAOAOABASIABAEQAAAWgQAPQgPAPgWABQgUgBgQgPg");
	this.shape_1.setTransform(97.7,365.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IBmAAIAAA5gAA3DeIhmAAIggAAIAAn0ICfAAIAAH0gAgjhEQgNAOgCASIAAAFQAAAWAPAOQAQAPAVABQAVgBAQgPQAPgOAAgWIAAgFQgCgSgNgOQgQgPgVAAQgVAAgQAPg");
	this.shape_2.setTransform(97.55,368.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#565755").s().p("AkTARIAAghIInAAIAAAhg");
	this.shape_3.setTransform(96.675,398.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7B8BD").s().p("ABTi9QAkAPAfAeQA8A8AABUQAABVg8A8QgfAfgkAPgAiVCQQg8g8AAhUQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdg");
	this.shape_4.setTransform(97.7,365.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,0,3).p("ABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5IhmAAIAAg5IBmAAAkTEHIInAAIAAAjIonAAgABZDLIgZAAIAAA5");
	this.shape_5.setTransform(96.675,380.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#565755").s().p("AkTARIAAgiIInAAIAAAig");
	this.shape_6.setTransform(96.675,408.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#313131").s().p("AgkAlQgQgQAAgVIABgEQABgSAOgOQAQgPAUgBQAWABAPAPQAOAOACASQAAAagQAPQgPAPgWAAQgUAAgQgPg");
	this.shape_7.setTransform(97.7,375.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IggAAIAAnzICfAAIAAHzIgZAAIhmAAIBmAAIAAA6IAAg6IAZAAIgZA6gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAPAVAAQAVAAAQgPQAPgOAAgbQgCgSgNgOQgQgPgVgBQgVABgQAPgAA3Ddg");
	this.shape_8.setTransform(97.55,378.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,0,3).p("ABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5AkTEHIInAAIAAAjIonAAgABZDLIgZAAIAAA5IhmAAIAAg5IBmAA");
	this.shape_9.setTransform(96.675,390.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#565755").s().p("AkTASIAAgjIInAAIAAAjg");
	this.shape_10.setTransform(96.675,418.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IggAAIAAnzICfAAIAAHzIgZAAIhmAAIBmAAIAAA6gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAPAVAAQAVAAAQgPQAPgOAAgbQgCgSgNgOQgQgPgVgBQgVABgQAPgAA3DdIAZAAIgZA6gAA3Ddg");
	this.shape_11.setTransform(97.55,388.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,0,3).p("AjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAgmDLIggAAIAAn0ICfAAIAAH0IgZAAAkTEHIInAAIAAAjIonAAgAgmDLIBmAAIAAA5ABZDLIgZA5IhmAAIAAg5");
	this.shape_12.setTransform(96.675,400.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#565755").s().p("AkTASIAAgiIInAAIAAAig");
	this.shape_13.setTransform(96.675,428.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#313131").s().p("AgkAlQgQgPAAgWIABgEQABgTAOgNQAQgQAUAAQAWAAAPAQQAOANACATQAAAagQAPQgPAQgWAAQgUAAgQgQg");
	this.shape_14.setTransform(97.7,394.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IggAAIAAnzICfAAIAAHzIgZAAIAZAAIgZA6IAAg6IhmAAIBmAAIAAA6gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAQAVAAQAVAAAQgQQAPgOAAgbQgCgTgNgNQgQgQgVAAQgVAAgQAQg");
	this.shape_15.setTransform(97.55,398.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,0,3).p("AjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5IhmAAIAAg5IBmAAABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAkTEHIInAAIAAAjIonAAgABZDLIgZAAIAAA5");
	this.shape_16.setTransform(96.675,409.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#313131").s().p("AgkAlQgQgQAAgVIABgEQABgSAOgOQAQgPAUAAQAWAAAPAPQAOAOACASQAAAZgQAQQgPAPgWAAQgUAAgQgPg");
	this.shape_17.setTransform(97.7,404.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IBmAAIAAA5IAAg5IAZAAIgZA5gAA3DeIhmAAIggAAIAAn0ICfAAIAAH0gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAPAVAAQAVAAAQgPQAPgPAAgaQgCgSgNgOQgQgPgVAAQgVAAgQAPgAA3Deg");
	this.shape_18.setTransform(97.55,408.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,0,3).p("AgmDLIggAAIAAn0ICfAAIAAH0IgZAAIAAA5IhmAAIAAg5IBmAAABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAkTEHIInAAIAAAjIonAAgABZDLIgZA5");
	this.shape_19.setTransform(96.675,419.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IggAAIAAn0ICfAAIAAH0IgZAAIAZAAIgZA5IAAg5IAAA5gAA3DeIhmAAgAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAPAVAAQAVAAAQgPQAPgPAAgaQgCgSgNgOQgQgPgVAAQgVAAgQAPg");
	this.shape_20.setTransform(97.55,418);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,0,3).p("ABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5IhmAAIAAg5IBmAAABZDLIgZAAIAAA5AkTEHIInAAIAAAjIonAAg");
	this.shape_21.setTransform(96.675,429.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#313131").s().p("AgkAlQgQgQAAgVIABgEQABgSAOgOQAQgQAUAAQAWAAAPAQQAOAOACASQAAAZgQAQQgPAQgWAAQgUAAgQgQg");
	this.shape_22.setTransform(97.7,424.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IBmAAIhmAAIggAAIAAnzICfAAIAAHzIgZAAIAAA6gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAQAVAAQAVAAAQgQQAPgPAAgaQgCgSgNgOQgQgQgVAAQgVAAgQAQgAA3DdIAZAAIgZA6gABQDdg");
	this.shape_23.setTransform(97.55,427.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,0,3).p("ABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5ABZDLIgZAAIAAA5IhmAAIAAg5IBmAAAkTEHIInAAIAAAjIonAAg");
	this.shape_24.setTransform(96.675,439.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#313131").s().p("AgkAlQgQgPAAgWIABgEQABgSAOgOQAQgPAUAAQAWAAAPAPQAOAOACASQAAAZgQAQQgPAPgWAAQgUAAgQgPg");
	this.shape_25.setTransform(97.7,434.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IggAAIAAn0ICfAAIAAH0IgZAAIhmAAIBmAAIAAA5gAgjhEQgNAOgBASIgBAFQAAAWAPAOQAQAPAVAAQAVAAAQgPQAPgPAAgaQgCgSgNgOQgQgPgVAAQgVAAgQAPgAA3DeIAZAAIgZA5gAA3Deg");
	this.shape_26.setTransform(97.55,437.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,0,3).p("AjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAgmDLIggAAIAAn0ICfAAIAAH0IgZAAAgmDLIBmAAIAAA5ABZDLIgZA5IhmAAIAAg5AkTEHIInAAIAAAjIonAAg");
	this.shape_27.setTransform(96.675,449.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IggAAIAAn0ICfAAIAAH0IgZAAIAZAAIgZA5IAAg5IhmAAIBmAAIAAA5gAgjhEQgNAOgBASIgBAFQAAAWAPAOQAQAPAVAAQAVAAAQgPQAPgPAAgaQgCgSgNgOQgQgPgVAAQgVAAgQAPg");
	this.shape_28.setTransform(97.55,447.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,0,3).p("AjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5IhmAAIAAg5IBmAAABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgABZDLIgZAAIAAA5AkTEHIInAAIAAAjIonAAg");
	this.shape_29.setTransform(96.675,459.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#313131").s().p("AgkAlQgQgPAAgWIABgEQABgSAOgOQAQgQAUAAQAWAAAPAQQAOAOACASQAAAagQAPQgPAQgWAAQgUAAgQgQg");
	this.shape_30.setTransform(97.7,454.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IBmAAIAAA6IAAg6IAZAAIgZA6gAA3DdIhmAAIggAAIAAnzICfAAIAAHzgAgjhEQgNAOgBASIgBAFQAAAWAPAOQAQAQAVAAQAVAAAQgQQAPgOAAgbQgCgSgNgOQgQgQgVAAQgVAAgQAQgAA3Ddg");
	this.shape_31.setTransform(97.55,457.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#313131").s().p("AgkAlQgQgPAAgWIABgEQABgTAOgNQAQgPAUAAQAWAAAPAPQAOANACATQAAAagQAPQgPAPgWAAQgUAAgQgPg");
	this.shape_32.setTransform(97.7,464.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IBmAAIAAA5gAA3DeIhmAAIggAAIAAn0ICfAAIAAH0IgZAAIAZAAIgZA5gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAPAVAAQAVAAAQgPQAPgOAAgbQgCgTgNgNQgQgPgVAAQgVAAgQAPgAA3Deg");
	this.shape_33.setTransform(97.55,467.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#313131").s().p("AgkAlQgQgPAAgWIABgEQABgTAOgNQAQgPAUAAQAWAAAPAPQAOANACATQAAAZgQAQQgPAPgWAAQgUAAgQgPg");
	this.shape_34.setTransform(97.7,474.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IggAAIAAn0ICfAAIAAH0IgZAAIhmAAIBmAAIAAA5IAAg5IAZAAIgZA5gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAPAVAAQAVAAAQgPQAPgPAAgaQgCgTgNgNQgQgPgVAAQgVAAgQAPgAA3Deg");
	this.shape_35.setTransform(97.55,477.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,0,3).p("AjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5AkTEHIInAAIAAAjIonAAgABZDLIgZAAIAAA5IhmAAIAAg5IBmAA");
	this.shape_36.setTransform(96.675,489.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#313131").s().p("AgkAlQgQgQAAgVIABgEQABgSAOgOQAQgQAUAAQAWAAAPAQQAOAOACASQAAAagQAPQgPAQgWAAQgUAAgQgQg");
	this.shape_37.setTransform(97.7,484.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IggAAIAAnzICfAAIAAHzIgZAAIhmAAIBmAAIAAA6gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAQAVAAQAVAAAQgQQAPgOAAgbQgCgSgNgOQgQgQgVAAQgVAAgQAQgAA3DdIAZAAIgZA6gAA3Ddg");
	this.shape_38.setTransform(97.55,487.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#313131").s().p("AgkAlQgQgPAAgWIABgEQABgTAOgNQAQgPAUAAQAWAAAPAPQAOANACATQAAAagQAPQgPAPgWABQgUgBgQgPg");
	this.shape_39.setTransform(97.7,494.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IggAAIAAn0ICfAAIAAH0IgZAAIAZAAIgZA5IAAg5IhmAAIBmAAIAAA5gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAPAVABQAVgBAQgPQAPgOAAgbQgCgTgNgNQgQgPgVAAQgVAAgQAPg");
	this.shape_40.setTransform(97.55,497.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IBmAAIAAA6IAAg6IAZAAIgZA6gAA3DdIhmAAIggAAIAAnzICfAAIAAHzgAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAPAVAAQAVAAAQgPQAPgOAAgbQgCgSgNgOQgQgPgVgBQgVABgQAPgAA3Ddg");
	this.shape_41.setTransform(97.55,507.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,0,3).p("AgmDLIggAAIAAn0ICfAAIAAH0IgZAAIAAA5IhmAAIAAg5IBmAAAkTEHIInAAIAAAjIonAAgABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgABZDLIgZA5");
	this.shape_42.setTransform(96.675,519.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#313131").s().p("AgkAlQgQgQAAgVIABgEQABgSAOgOQAQgQAUAAQAWAAAPAQQAOAOACASQAAAagQAPQgPAPgWAAQgUAAgQgPg");
	this.shape_43.setTransform(97.7,514.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IBmAAIAAA6gAA3DdIhmAAIggAAIAAnzICfAAIAAHzIgZAAIAZAAIgZA6gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAPAVAAQAVAAAQgPQAPgOAAgbQgCgSgNgOQgQgQgVAAQgVAAgQAQgAA3Ddg");
	this.shape_44.setTransform(97.55,517.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,0,3).p("AkTEHIInAAIAAAjIonAAgABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5IhmAAIAAg5IBmAAABZDLIgZAAIAAA5");
	this.shape_45.setTransform(96.675,529.175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#313131").s().p("AgkAlQgQgQAAgVIABgEQABgTAOgNQAQgQAUAAQAWAAAPAQQAOANACATQAAAZgQAQQgPAQgWAAQgUAAgQgQg");
	this.shape_46.setTransform(97.7,524.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IBmAAIhmAAIggAAIAAn0ICfAAIAAH0IgZAAIAAA5gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAQAVAAQAVAAAQgQQAPgOAAgbQgCgTgNgNQgQgQgVAAQgVAAgQAQgAA3DeIAZAAIgZA5gABQDeg");
	this.shape_47.setTransform(97.55,527.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,0,3).p("AkTEHIInAAIAAAjIonAAgABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5AjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgABZDLIgZAAIAAA5IhmAAIAAg5IBmAA");
	this.shape_48.setTransform(96.675,539.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IggAAIAAn0ICfAAIAAH0IgZAAIhmAAIBmAAIAAA5gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAPAVAAQAVAAAQgPQAPgPAAgaQgCgSgNgOQgQgPgVAAQgVAAgQAPgAA3DeIAZAAIgZA5gAA3Deg");
	this.shape_49.setTransform(97.55,537.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,0,3).p("AkTEHIInAAIAAAjIonAAgAjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAgmDLIggAAIAAn0ICfAAIAAH0IgZAAIAAA5IhmAAIAAg5IBmAAABZDLIgZA5");
	this.shape_50.setTransform(96.675,549.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IBmAAIAAA5IAAg5IhmAAIggAAIAAn0ICfAAIAAH0IgZAAIAZAAIgZA5gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAPAVAAQAVAAAQgPQAPgPAAgaQgCgSgNgOQgQgPgVAAQgVAAgQAPg");
	this.shape_51.setTransform(97.55,547.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,0,3).p("AkTEHIInAAIAAAjIonAAgAjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5IhmAAIAAg5IBmAAABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgABZDLIgZAAIAAA5");
	this.shape_52.setTransform(96.675,558.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IBmAAIAAA6IAAg6IAZAAIgZA6gAA3DdIhmAAIggAAIAAnzICfAAIAAHzgAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAQAVAAQAVAAAQgQQAPgPAAgaQgCgSgNgOQgQgQgVAAQgVAAgQAQgAA3Ddg");
	this.shape_53.setTransform(97.55,557.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IBmAAIAAA5gAA3DeIhmAAIggAAIAAn0ICfAAIAAH0IgZAAIAZAAIgZA5gAgjhEQgNAOgBASIgBAFQAAAWAPAOQAQAPAVAAQAVAAAQgPQAPgPAAgaQgCgSgNgOQgQgPgVAAQgVAAgQAPgAA3Deg");
	this.shape_54.setTransform(97.55,567.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IggAAIAAn0ICfAAIAAH0IgZAAIhmAAIBmAAIAAA5IAAg5IAZAAIgZA5gAgjhEQgNAOgBASIgBAFQAAAWAPAOQAQAPAVAAQAVAAAQgPQAPgPAAgaQgCgSgNgOQgQgPgVAAQgVAAgQAPgAA3Deg");
	this.shape_55.setTransform(97.55,576.95);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,0,3).p("ABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5AjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAkTEHIInAAIAAAjIonAAgABZDLIgZAAIAAA5IhmAAIAAg5IBmAA");
	this.shape_56.setTransform(96.675,588.775);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#313131").s().p("AgkAlQgQgPAAgWIABgEQABgSAOgOQAQgQAUAAQAWAAAPAQQAOAOACASQAAAZgQAQQgPAQgWAAQgUAAgQgQg");
	this.shape_57.setTransform(97.7,583.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,0,3).p("AjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAgmDLIggAAIAAn0ICfAAIAAH0IgZAAIAAA5IhmAAIAAg5IBmAAABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAkTEHIInAAIAAAjIonAAgABZDLIgZA5");
	this.shape_58.setTransform(96.675,598.725);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IggAAIAAn0ICfAAIAAH0IgZAAIAZAAIgZA5IAAg5IhmAAIBmAAIAAA5gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAPAVAAQAVAAAQgPQAPgOAAgbQgCgTgNgNQgQgPgVAAQgVAAgQAPg");
	this.shape_59.setTransform(97.55,596.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IBmAAIAAA5IAAg5IAZAAIgZA5gAA3DeIhmAAIggAAIAAn0ICfAAIAAH0gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAPAVAAQAVAAAQgPQAPgPAAgaQgCgTgNgNQgQgPgVAAQgVAAgQAPgAA3Deg");
	this.shape_60.setTransform(97.55,606.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IggAAIAAnzICfAAIAAHzIgZAAIAZAAIgZA6IAAg6IAAA6gAA3DdIhmAAgAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAPAVAAQAVAAAQgPQAPgOAAgbQgCgSgNgOQgQgQgVAAQgVAAgQAQg");
	this.shape_61.setTransform(97.55,616.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IBmAAIhmAAIggAAIAAn0ICfAAIAAH0IgZAAIAAA5gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAPAVABQAVgBAQgPQAPgOAAgbQgCgTgNgNQgQgPgVAAQgVAAgQAPgAA3DeIAZAAIgZA5gABQDeg");
	this.shape_62.setTransform(97.55,626.65);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,0,3).p("ABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5AjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgABZDLIgZAAIAAA5IhmAAIAAg5IBmAAAkTEHIInAAIAAAjIonAAg");
	this.shape_63.setTransform(96.675,638.425);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IggAAIAAn0ICfAAIAAH0IgZAAIhmAAIBmAAIAAA5gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAPAVABQAVgBAQgPQAPgOAAgbQgCgTgNgNQgQgPgVAAQgVAAgQAPgAA3DeIAZAAIgZA5gAA3Deg");
	this.shape_64.setTransform(97.55,636.55);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(1,1,0,3).p("AjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAgmDLIggAAIAAn0ICfAAIAAH0IgZAAIAAA5IhmAAIAAg5IBmAAABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgABZDLIgZA5AkTEHIInAAIAAAjIonAAg");
	this.shape_65.setTransform(96.675,648.375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IggAAIAAnzICfAAIAAHzIgZAAIAZAAIgZA6IAAg6IhmAAIBmAAIAAA6gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAPAVAAQAVAAAQgPQAPgOAAgbQgCgSgNgOQgQgQgVAAQgVAAgQAQg");
	this.shape_66.setTransform(97.55,646.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IBmAAIAAA6IAAg6IAZAAIgZA6gAA3DdIhmAAIggAAIAAnzICfAAIAAHzgAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAQAVAAQAVAAAQgQQAPgOAAgbQgCgTgNgNQgQgQgVAAQgVAAgQAQgAA3Ddg");
	this.shape_67.setTransform(97.55,656.45);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IBmAAIAAA6gAA3DdIhmAAIggAAIAAnzICfAAIAAHzIgZAAIAZAAIgZA6gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAQAVAAQAVAAAQgQQAPgOAAgbQgCgTgNgNQgQgQgVAAQgVAAgQAQgAA3Ddg");
	this.shape_68.setTransform(97.55,666.35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IggAAIAAn0ICfAAIAAH0IgZAAIhmAAIBmAAIAAA5IAAg5IAZAAIgZA5gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAPAVAAQAVAAAQgPQAPgPAAgaQgCgSgNgOQgQgPgVAAQgVAAgQAPgAA3Deg");
	this.shape_69.setTransform(97.55,676.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IggAAIAAnzICfAAIAAHzIgZAAIhmAAIBmAAIAAA6gAgjhEQgNANgBATIgBAFQAAAVAPAPQAQAQAVAAQAVAAAQgQQAPgPAAgaQgCgTgNgNQgQgQgVAAQgVAAgQAQgAA3DdIAZAAIgZA6gAA3Ddg");
	this.shape_70.setTransform(97.55,686.25);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IggAAIAAnzICfAAIAAHzIgZAAIAZAAIgZA6IAAg6IhmAAIBmAAIAAA6gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAQAVAAQAVAAAQgQQAPgPAAgaQgCgSgNgOQgQgQgVAAQgVAAgQAQg");
	this.shape_71.setTransform(97.55,696.15);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IBmAAIAAA5IAAg5IAZAAIgZA5gAA3DeIhmAAIggAAIAAn0ICfAAIAAH0gAgjhEQgNAOgBASIgBAFQAAAWAPAOQAQAPAVAAQAVAAAQgPQAPgPAAgaQgCgSgNgOQgQgPgVAAQgVAAgQAPgAA3Deg");
	this.shape_72.setTransform(97.55,706.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IBmAAIAAA6gAA3DdIhmAAIggAAIAAnzICfAAIAAHzIgZAAIAZAAIgZA6gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAQAVAAQAVAAAQgQQAPgPAAgaQgCgSgNgOQgQgQgVAAQgVAAgQAQgAA3Ddg");
	this.shape_73.setTransform(97.55,716.05);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IBmAAIhmAAIggAAIAAnzICfAAIAAHzIgZAAIAAA6gAgjhEQgNAOgBASIgBAFQAAAWAPAOQAQAQAVAAQAVAAAQgQQAPgOAAgbQgCgSgNgOQgQgQgVAAQgVAAgQAQgAA3DdIAZAAIgZA6gABQDdg");
	this.shape_74.setTransform(97.55,725.95);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IggAAIAAn0ICfAAIAAH0IgZAAIhmAAIBmAAIAAA5gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAPAVAAQAVAAAQgPQAPgOAAgbQgCgTgNgNQgQgPgVAAQgVAAgQAPgAA3DeIAZAAIgZA5gAA3Deg");
	this.shape_75.setTransform(97.55,735.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,0,3).p("AkTEHIInAAIAAAjIonAAgAjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5IhmAAIAAg5IBmAAIAAA5ABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgABZDLIgZAA");
	this.shape_76.setTransform(96.675,747.725);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IBmAAIhmAAIggAAIAAnzICfAAIAAHzIgZAAIAAA6gAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAPAVAAQAVAAAQgPQAPgOAAgbQgCgSgNgOQgQgQgVAAQgVAAgQAQgAA3DdIAZAAIgZA6gABQDdg");
	this.shape_77.setTransform(97.55,745.85);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IBmAAIAAA5IAAg5IAZAAIgZA5gAA3DeIhmAAIggAAIAAn0ICfAAIAAH0gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAPAVABQAVgBAQgPQAPgOAAgbQgCgTgNgNQgQgPgVAAQgVAAgQAPgAA3Deg");
	this.shape_78.setTransform(97.55,755.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IBmAAIAAA5gAA3DeIhmAAIggAAIAAn0ICfAAIAAH0IgZAAIAZAAIgZA5gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAPAVABQAVgBAQgPQAPgOAAgbQgCgTgNgNQgQgPgVAAQgVAAgQAPgAA3Deg");
	this.shape_79.setTransform(97.55,765.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IggAAIAAnzICfAAIAAHzIgZAAIhmAAIBmAAIAAA6gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAQAVAAQAVAAAQgQQAPgOAAgbQgCgTgNgNQgQgQgVAAQgVAAgQAQgAA3DdIAZAAIgZA6gAA3Ddg");
	this.shape_80.setTransform(97.55,785.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1,1,0,3).p("AjHguQAAhVA8g9QAdgdAjgPIAAF6QgjgPgdgdQg8g8AAhUgAgmDLIggAAIAAn0ICfAAIAAH0IgZA5IhmAAIAAg5IBmAAIAAA5ABdjrQAlAPAeAeQA8A8AABVQAABUg8A8QgeAfglAPgAkTEHIInAAIAAAjIonAAgABZDLIgZAA");
	this.shape_81.setTransform(96.675,797.375);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IBmAAIhmAAIggAAIAAnzICfAAIAAHzIgZAAIAAA6gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAQAVAAQAVAAAQgQQAPgOAAgbQgCgTgNgNQgQgQgVAAQgVAAgQAQgAA3DdIAZAAIgZA6gABQDdg");
	this.shape_82.setTransform(97.55,795.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IggAAIAAnzICfAAIAAHzIgZAAIAZAAIgZA6IAAg6IAAA6gAA3DdIhmAAgAgjhEQgNAOgBASIgBAFQAAAVAPAPQAQAQAVAAQAVAAAQgQQAPgPAAgaQgCgSgNgOQgQgQgVAAQgVAAgQAQg");
	this.shape_83.setTransform(97.55,815.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D5D6E8").s().p("AgvEXIAAg6IBmAAIhmAAIggAAIAAnzICfAAIAAHzIgZAAIAAA6gAgjhEQgNANgBATIgBAFQAAAVAPAPQAQAQAVAAQAVAAAQgQQAPgPAAgaQgCgTgNgNQgQgQgVAAQgVAAgQAQgAA3DdIAZAAIgZA6gABQDdg");
	this.shape_84.setTransform(97.55,825.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#313131").s().p("AgkAlQgQgPAAgWIABgEQABgTAOgNQAQgPAUAAQAWAAAPAPQAOANACATIAAAEQAAAWgQAPQgPAPgWAAQgUAAgQgPg");
	this.shape_85.setTransform(97.7,861.85);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D5D6E8").s().p("AgvEXIAAg5IBmAAIAAA5gAA3DeIhmAAIggAAIAAn0ICfAAIAAH0gAgjhEQgNANgBATIgBAFQAAAWAPAOQAQAPAVAAQAVAAAQgPQAPgOAAgWIAAgFQgCgTgNgNQgQgPgVAAQgVAAgQAPg");
	this.shape_86.setTransform(97.55,865.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{y:365.625}},{t:this.shape_3,p:{y:398.25}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{y:370.225}}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_4,p:{y:365.625}},{t:this.shape_3,p:{y:398.25}},{t:this.shape,p:{y:370.225}}]},49).to({state:[{t:this.shape_4,p:{y:375.575}},{t:this.shape_8,p:{y:378.3}},{t:this.shape_7,p:{y:375.1}},{t:this.shape_6,p:{y:408.2}},{t:this.shape_5,p:{y:380.175}}]},1).to({state:[{t:this.shape_4,p:{y:385.475}},{t:this.shape_11},{t:this.shape_7,p:{y:385}},{t:this.shape_10,p:{y:418.1}},{t:this.shape_9}]},1).to({state:[{t:this.shape_4,p:{y:395.425}},{t:this.shape_15},{t:this.shape_14,p:{y:394.95}},{t:this.shape_13,p:{y:428.05}},{t:this.shape_12,p:{y:400.025}}]},1).to({state:[{t:this.shape_4,p:{y:405.375}},{t:this.shape_18,p:{y:408.1}},{t:this.shape_6,p:{y:438}},{t:this.shape_17,p:{y:404.9}},{t:this.shape_16,p:{y:409.975}}]},1).to({state:[{t:this.shape_20},{t:this.shape_4,p:{y:415.275}},{t:this.shape_17,p:{y:414.8}},{t:this.shape_6,p:{y:447.9}},{t:this.shape_19,p:{y:419.875}}]},1).to({state:[{t:this.shape_4,p:{y:425.225}},{t:this.shape_23},{t:this.shape_22,p:{y:424.75}},{t:this.shape_13,p:{y:457.85}},{t:this.shape_21,p:{y:429.825}}]},1).to({state:[{t:this.shape_4,p:{y:435.175}},{t:this.shape_26,p:{y:437.9}},{t:this.shape_25,p:{y:434.7}},{t:this.shape_6,p:{y:467.8}},{t:this.shape_24}]},1).to({state:[{t:this.shape_4,p:{y:445.075}},{t:this.shape_28},{t:this.shape_25,p:{y:444.6}},{t:this.shape_6,p:{y:477.7}},{t:this.shape_27}]},1).to({state:[{t:this.shape_4,p:{y:455.025}},{t:this.shape_31,p:{y:457.75}},{t:this.shape_30,p:{y:454.55}},{t:this.shape_13,p:{y:487.65}},{t:this.shape_29,p:{y:459.625}}]},1).to({state:[{t:this.shape_33},{t:this.shape_4,p:{y:464.975}},{t:this.shape_32,p:{y:464.5}},{t:this.shape_6,p:{y:497.6}},{t:this.shape_19,p:{y:469.575}}]},1).to({state:[{t:this.shape_4,p:{y:474.875}},{t:this.shape_35},{t:this.shape_34,p:{y:474.4}},{t:this.shape_6,p:{y:507.5}},{t:this.shape_5,p:{y:479.475}}]},1).to({state:[{t:this.shape_4,p:{y:484.825}},{t:this.shape_38,p:{y:487.55}},{t:this.shape_37,p:{y:484.35}},{t:this.shape_13,p:{y:517.45}},{t:this.shape_36}]},1).to({state:[{t:this.shape_4,p:{y:494.775}},{t:this.shape_40},{t:this.shape_39,p:{y:494.3}},{t:this.shape_3,p:{y:527.4}},{t:this.shape_12,p:{y:499.375}}]},1).to({state:[{t:this.shape_4,p:{y:504.725}},{t:this.shape_41},{t:this.shape_6,p:{y:537.35}},{t:this.shape_7,p:{y:504.25}},{t:this.shape_16,p:{y:509.325}}]},1).to({state:[{t:this.shape_44},{t:this.shape_10,p:{y:547.25}},{t:this.shape_4,p:{y:514.625}},{t:this.shape_43,p:{y:514.15}},{t:this.shape_42,p:{y:519.225}}]},1).to({state:[{t:this.shape_13,p:{y:557.2}},{t:this.shape_4,p:{y:524.575}},{t:this.shape_47},{t:this.shape_46,p:{y:524.1}},{t:this.shape_45,p:{y:529.175}}]},1).to({state:[{t:this.shape_6,p:{y:567.15}},{t:this.shape_49},{t:this.shape_17,p:{y:534.05}},{t:this.shape_4,p:{y:534.525}},{t:this.shape_48,p:{y:539.125}}]},1).to({state:[{t:this.shape_6,p:{y:577.05}},{t:this.shape_4,p:{y:544.425}},{t:this.shape_51},{t:this.shape_17,p:{y:543.95}},{t:this.shape_50}]},1).to({state:[{t:this.shape_13,p:{y:587}},{t:this.shape_4,p:{y:554.375}},{t:this.shape_53,p:{y:557.1}},{t:this.shape_22,p:{y:553.9}},{t:this.shape_52,p:{y:558.975}}]},1).to({state:[{t:this.shape_54},{t:this.shape_4,p:{y:564.325}},{t:this.shape_25,p:{y:563.85}},{t:this.shape_6,p:{y:596.95}},{t:this.shape_19,p:{y:568.925}}]},1).to({state:[{t:this.shape_4,p:{y:574.225}},{t:this.shape_55},{t:this.shape_25,p:{y:573.75}},{t:this.shape_6,p:{y:606.85}},{t:this.shape_5,p:{y:578.825}}]},1).to({state:[{t:this.shape_38,p:{y:586.9}},{t:this.shape_57},{t:this.shape_4,p:{y:584.175}},{t:this.shape_13,p:{y:616.8}},{t:this.shape_56,p:{y:588.775}}]},1).to({state:[{t:this.shape_4,p:{y:594.125}},{t:this.shape_59},{t:this.shape_32,p:{y:593.65}},{t:this.shape_6,p:{y:626.75}},{t:this.shape_58,p:{y:598.725}}]},1).to({state:[{t:this.shape_4,p:{y:604.025}},{t:this.shape_60},{t:this.shape_6,p:{y:636.65}},{t:this.shape_34,p:{y:603.55}},{t:this.shape_16,p:{y:608.625}}]},1).to({state:[{t:this.shape_61},{t:this.shape_4,p:{y:613.975}},{t:this.shape_37,p:{y:613.5}},{t:this.shape_10,p:{y:646.6}},{t:this.shape_19,p:{y:618.575}}]},1).to({state:[{t:this.shape_4,p:{y:623.925}},{t:this.shape_62},{t:this.shape_39,p:{y:623.45}},{t:this.shape_3,p:{y:656.55}},{t:this.shape_21,p:{y:628.525}}]},1).to({state:[{t:this.shape_64},{t:this.shape_39,p:{y:633.35}},{t:this.shape_4,p:{y:633.825}},{t:this.shape_3,p:{y:666.45}},{t:this.shape_63,p:{y:638.425}}]},1).to({state:[{t:this.shape_4,p:{y:643.775}},{t:this.shape_66},{t:this.shape_43,p:{y:643.3}},{t:this.shape_6,p:{y:676.4}},{t:this.shape_65}]},1).to({state:[{t:this.shape_4,p:{y:653.725}},{t:this.shape_67},{t:this.shape_14,p:{y:653.25}},{t:this.shape_13,p:{y:686.35}},{t:this.shape_29,p:{y:658.325}}]},1).to({state:[{t:this.shape_68},{t:this.shape_4,p:{y:663.625}},{t:this.shape_14,p:{y:663.15}},{t:this.shape_13,p:{y:696.25}},{t:this.shape_19,p:{y:668.225}}]},1).to({state:[{t:this.shape_4,p:{y:673.575}},{t:this.shape_69},{t:this.shape_17,p:{y:673.1}},{t:this.shape_6,p:{y:706.2}},{t:this.shape_5,p:{y:678.175}}]},1).to({state:[{t:this.shape_70},{t:this.shape_46,p:{y:683.05}},{t:this.shape_4,p:{y:683.525}},{t:this.shape_13,p:{y:716.15}},{t:this.shape_56,p:{y:688.125}}]},1).to({state:[{t:this.shape_4,p:{y:693.425}},{t:this.shape_71},{t:this.shape_22,p:{y:692.95}},{t:this.shape_13,p:{y:726.05}},{t:this.shape_58,p:{y:698.025}}]},1).to({state:[{t:this.shape_4,p:{y:703.375}},{t:this.shape_72},{t:this.shape_6,p:{y:736}},{t:this.shape_25,p:{y:702.9}},{t:this.shape_16,p:{y:707.975}}]},1).to({state:[{t:this.shape_73},{t:this.shape_13,p:{y:745.95}},{t:this.shape_4,p:{y:713.325}},{t:this.shape_22,p:{y:712.85}},{t:this.shape_42,p:{y:717.925}}]},1).to({state:[{t:this.shape_13,p:{y:755.85}},{t:this.shape_4,p:{y:723.225}},{t:this.shape_74},{t:this.shape_30,p:{y:722.75}},{t:this.shape_45,p:{y:727.825}}]},1).to({state:[{t:this.shape_6,p:{y:765.8}},{t:this.shape_75},{t:this.shape_32,p:{y:732.7}},{t:this.shape_4,p:{y:733.175}},{t:this.shape_48,p:{y:737.775}}]},1).to({state:[{t:this.shape_10,p:{y:775.75}},{t:this.shape_4,p:{y:743.125}},{t:this.shape_77},{t:this.shape_43,p:{y:742.65}},{t:this.shape_76}]},1).to({state:[{t:this.shape_3,p:{y:785.7}},{t:this.shape_4,p:{y:753.075}},{t:this.shape_78},{t:this.shape_39,p:{y:752.6}},{t:this.shape_52,p:{y:757.675}}]},1).to({state:[{t:this.shape_79},{t:this.shape_4,p:{y:762.975}},{t:this.shape_39,p:{y:762.5}},{t:this.shape_3,p:{y:795.6}},{t:this.shape_19,p:{y:767.575}}]},1).to({state:[{t:this.shape_4,p:{y:772.925}},{t:this.shape_8,p:{y:775.65}},{t:this.shape_7,p:{y:772.45}},{t:this.shape_6,p:{y:805.55}},{t:this.shape_5,p:{y:777.525}}]},1).to({state:[{t:this.shape_80},{t:this.shape_14,p:{y:782.4}},{t:this.shape_4,p:{y:782.875}},{t:this.shape_13,p:{y:815.5}},{t:this.shape_56,p:{y:787.475}}]},1).to({state:[{t:this.shape_4,p:{y:792.775}},{t:this.shape_82},{t:this.shape_14,p:{y:792.3}},{t:this.shape_13,p:{y:825.4}},{t:this.shape_81}]},1).to({state:[{t:this.shape_4,p:{y:802.725}},{t:this.shape_18,p:{y:805.45}},{t:this.shape_6,p:{y:835.35}},{t:this.shape_17,p:{y:802.25}},{t:this.shape_16,p:{y:807.325}}]},1).to({state:[{t:this.shape_83},{t:this.shape_4,p:{y:812.675}},{t:this.shape_22,p:{y:812.2}},{t:this.shape_13,p:{y:845.3}},{t:this.shape_19,p:{y:817.275}}]},1).to({state:[{t:this.shape_4,p:{y:822.575}},{t:this.shape_84},{t:this.shape_46,p:{y:822.1}},{t:this.shape_13,p:{y:855.2}},{t:this.shape_21,p:{y:827.175}}]},1).to({state:[{t:this.shape_26,p:{y:835.25}},{t:this.shape_25,p:{y:832.05}},{t:this.shape_4,p:{y:832.525}},{t:this.shape_6,p:{y:865.15}},{t:this.shape_63,p:{y:837.125}}]},1).to({state:[{t:this.shape_4,p:{y:842.475}},{t:this.shape_31,p:{y:845.2}},{t:this.shape_30,p:{y:842}},{t:this.shape_13,p:{y:875.1}},{t:this.shape_29,p:{y:847.075}}]},1).to({state:[{t:this.shape_4,p:{y:852.375}},{t:this.shape_53,p:{y:855.1}},{t:this.shape_22,p:{y:851.9}},{t:this.shape_13,p:{y:885}},{t:this.shape_29,p:{y:856.975}}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_4,p:{y:862.325}},{t:this.shape_6,p:{y:894.95}},{t:this.shape,p:{y:866.925}}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_4,p:{y:862.325}},{t:this.shape_6,p:{y:894.95}},{t:this.shape,p:{y:866.925}}]},1).to({state:[{t:this.shape_4,p:{y:852.375}},{t:this.shape_53,p:{y:855.1}},{t:this.shape_22,p:{y:851.9}},{t:this.shape_13,p:{y:885}},{t:this.shape_29,p:{y:856.975}}]},1).to({state:[{t:this.shape_4,p:{y:842.475}},{t:this.shape_31,p:{y:845.2}},{t:this.shape_30,p:{y:842}},{t:this.shape_13,p:{y:875.1}},{t:this.shape_29,p:{y:847.075}}]},1).to({state:[{t:this.shape_26,p:{y:835.25}},{t:this.shape_25,p:{y:832.05}},{t:this.shape_4,p:{y:832.525}},{t:this.shape_6,p:{y:865.15}},{t:this.shape_63,p:{y:837.125}}]},1).to({state:[{t:this.shape_4,p:{y:822.575}},{t:this.shape_84},{t:this.shape_46,p:{y:822.1}},{t:this.shape_13,p:{y:855.2}},{t:this.shape_21,p:{y:827.175}}]},1).to({state:[{t:this.shape_83},{t:this.shape_4,p:{y:812.675}},{t:this.shape_22,p:{y:812.2}},{t:this.shape_13,p:{y:845.3}},{t:this.shape_19,p:{y:817.275}}]},1).to({state:[{t:this.shape_4,p:{y:802.725}},{t:this.shape_18,p:{y:805.45}},{t:this.shape_6,p:{y:835.35}},{t:this.shape_17,p:{y:802.25}},{t:this.shape_16,p:{y:807.325}}]},1).to({state:[{t:this.shape_4,p:{y:792.775}},{t:this.shape_82},{t:this.shape_14,p:{y:792.3}},{t:this.shape_13,p:{y:825.4}},{t:this.shape_81}]},1).to({state:[{t:this.shape_80},{t:this.shape_14,p:{y:782.4}},{t:this.shape_4,p:{y:782.875}},{t:this.shape_13,p:{y:815.5}},{t:this.shape_56,p:{y:787.475}}]},1).to({state:[{t:this.shape_4,p:{y:772.925}},{t:this.shape_8,p:{y:775.65}},{t:this.shape_7,p:{y:772.45}},{t:this.shape_6,p:{y:805.55}},{t:this.shape_5,p:{y:777.525}}]},1).to({state:[{t:this.shape_79},{t:this.shape_4,p:{y:762.975}},{t:this.shape_39,p:{y:762.5}},{t:this.shape_3,p:{y:795.6}},{t:this.shape_19,p:{y:767.575}}]},1).to({state:[{t:this.shape_3,p:{y:785.7}},{t:this.shape_4,p:{y:753.075}},{t:this.shape_78},{t:this.shape_39,p:{y:752.6}},{t:this.shape_52,p:{y:757.675}}]},1).to({state:[{t:this.shape_10,p:{y:775.75}},{t:this.shape_4,p:{y:743.125}},{t:this.shape_77},{t:this.shape_43,p:{y:742.65}},{t:this.shape_76}]},1).to({state:[{t:this.shape_6,p:{y:765.8}},{t:this.shape_75},{t:this.shape_32,p:{y:732.7}},{t:this.shape_4,p:{y:733.175}},{t:this.shape_48,p:{y:737.775}}]},1).to({state:[{t:this.shape_13,p:{y:755.85}},{t:this.shape_4,p:{y:723.225}},{t:this.shape_74},{t:this.shape_30,p:{y:722.75}},{t:this.shape_45,p:{y:727.825}}]},1).to({state:[{t:this.shape_73},{t:this.shape_13,p:{y:745.95}},{t:this.shape_4,p:{y:713.325}},{t:this.shape_22,p:{y:712.85}},{t:this.shape_42,p:{y:717.925}}]},1).to({state:[{t:this.shape_4,p:{y:703.375}},{t:this.shape_72},{t:this.shape_6,p:{y:736}},{t:this.shape_25,p:{y:702.9}},{t:this.shape_16,p:{y:707.975}}]},1).to({state:[{t:this.shape_4,p:{y:693.425}},{t:this.shape_71},{t:this.shape_22,p:{y:692.95}},{t:this.shape_13,p:{y:726.05}},{t:this.shape_58,p:{y:698.025}}]},1).to({state:[{t:this.shape_70},{t:this.shape_46,p:{y:683.05}},{t:this.shape_4,p:{y:683.525}},{t:this.shape_13,p:{y:716.15}},{t:this.shape_56,p:{y:688.125}}]},1).to({state:[{t:this.shape_4,p:{y:673.575}},{t:this.shape_69},{t:this.shape_17,p:{y:673.1}},{t:this.shape_6,p:{y:706.2}},{t:this.shape_5,p:{y:678.175}}]},1).to({state:[{t:this.shape_68},{t:this.shape_4,p:{y:663.625}},{t:this.shape_14,p:{y:663.15}},{t:this.shape_13,p:{y:696.25}},{t:this.shape_19,p:{y:668.225}}]},1).to({state:[{t:this.shape_4,p:{y:653.725}},{t:this.shape_67},{t:this.shape_14,p:{y:653.25}},{t:this.shape_13,p:{y:686.35}},{t:this.shape_29,p:{y:658.325}}]},1).to({state:[{t:this.shape_4,p:{y:643.775}},{t:this.shape_66},{t:this.shape_43,p:{y:643.3}},{t:this.shape_6,p:{y:676.4}},{t:this.shape_65}]},1).to({state:[{t:this.shape_64},{t:this.shape_39,p:{y:633.35}},{t:this.shape_4,p:{y:633.825}},{t:this.shape_3,p:{y:666.45}},{t:this.shape_63,p:{y:638.425}}]},1).to({state:[{t:this.shape_4,p:{y:623.925}},{t:this.shape_62},{t:this.shape_39,p:{y:623.45}},{t:this.shape_3,p:{y:656.55}},{t:this.shape_21,p:{y:628.525}}]},1).to({state:[{t:this.shape_61},{t:this.shape_4,p:{y:613.975}},{t:this.shape_37,p:{y:613.5}},{t:this.shape_10,p:{y:646.6}},{t:this.shape_19,p:{y:618.575}}]},1).to({state:[{t:this.shape_4,p:{y:604.025}},{t:this.shape_60},{t:this.shape_6,p:{y:636.65}},{t:this.shape_34,p:{y:603.55}},{t:this.shape_16,p:{y:608.625}}]},1).to({state:[{t:this.shape_4,p:{y:594.125}},{t:this.shape_59},{t:this.shape_32,p:{y:593.65}},{t:this.shape_6,p:{y:626.75}},{t:this.shape_58,p:{y:598.725}}]},1).to({state:[{t:this.shape_38,p:{y:586.9}},{t:this.shape_57},{t:this.shape_4,p:{y:584.175}},{t:this.shape_13,p:{y:616.8}},{t:this.shape_56,p:{y:588.775}}]},1).to({state:[{t:this.shape_4,p:{y:574.225}},{t:this.shape_55},{t:this.shape_25,p:{y:573.75}},{t:this.shape_6,p:{y:606.85}},{t:this.shape_5,p:{y:578.825}}]},1).to({state:[{t:this.shape_54},{t:this.shape_4,p:{y:564.325}},{t:this.shape_25,p:{y:563.85}},{t:this.shape_6,p:{y:596.95}},{t:this.shape_19,p:{y:568.925}}]},1).to({state:[{t:this.shape_13,p:{y:587}},{t:this.shape_4,p:{y:554.375}},{t:this.shape_53,p:{y:557.1}},{t:this.shape_22,p:{y:553.9}},{t:this.shape_52,p:{y:558.975}}]},1).to({state:[{t:this.shape_6,p:{y:577.05}},{t:this.shape_4,p:{y:544.425}},{t:this.shape_51},{t:this.shape_17,p:{y:543.95}},{t:this.shape_50}]},1).to({state:[{t:this.shape_6,p:{y:567.15}},{t:this.shape_49},{t:this.shape_17,p:{y:534.05}},{t:this.shape_4,p:{y:534.525}},{t:this.shape_48,p:{y:539.125}}]},1).to({state:[{t:this.shape_13,p:{y:557.2}},{t:this.shape_4,p:{y:524.575}},{t:this.shape_47},{t:this.shape_46,p:{y:524.1}},{t:this.shape_45,p:{y:529.175}}]},1).to({state:[{t:this.shape_44},{t:this.shape_10,p:{y:547.25}},{t:this.shape_4,p:{y:514.625}},{t:this.shape_43,p:{y:514.15}},{t:this.shape_42,p:{y:519.225}}]},1).to({state:[{t:this.shape_4,p:{y:504.725}},{t:this.shape_41},{t:this.shape_6,p:{y:537.35}},{t:this.shape_7,p:{y:504.25}},{t:this.shape_16,p:{y:509.325}}]},1).to({state:[{t:this.shape_4,p:{y:494.775}},{t:this.shape_40},{t:this.shape_39,p:{y:494.3}},{t:this.shape_3,p:{y:527.4}},{t:this.shape_12,p:{y:499.375}}]},1).to({state:[{t:this.shape_4,p:{y:484.825}},{t:this.shape_38,p:{y:487.55}},{t:this.shape_37,p:{y:484.35}},{t:this.shape_13,p:{y:517.45}},{t:this.shape_36}]},1).to({state:[{t:this.shape_4,p:{y:474.875}},{t:this.shape_35},{t:this.shape_34,p:{y:474.4}},{t:this.shape_6,p:{y:507.5}},{t:this.shape_5,p:{y:479.475}}]},1).to({state:[{t:this.shape_33},{t:this.shape_4,p:{y:464.975}},{t:this.shape_32,p:{y:464.5}},{t:this.shape_6,p:{y:497.6}},{t:this.shape_19,p:{y:469.575}}]},1).to({state:[{t:this.shape_4,p:{y:455.025}},{t:this.shape_31,p:{y:457.75}},{t:this.shape_30,p:{y:454.55}},{t:this.shape_13,p:{y:487.65}},{t:this.shape_29,p:{y:459.625}}]},1).to({state:[{t:this.shape_4,p:{y:445.075}},{t:this.shape_28},{t:this.shape_25,p:{y:444.6}},{t:this.shape_6,p:{y:477.7}},{t:this.shape_27}]},1).to({state:[{t:this.shape_4,p:{y:435.175}},{t:this.shape_26,p:{y:437.9}},{t:this.shape_25,p:{y:434.7}},{t:this.shape_6,p:{y:467.8}},{t:this.shape_24}]},1).to({state:[{t:this.shape_4,p:{y:425.225}},{t:this.shape_23},{t:this.shape_22,p:{y:424.75}},{t:this.shape_13,p:{y:457.85}},{t:this.shape_21,p:{y:429.825}}]},1).to({state:[{t:this.shape_20},{t:this.shape_4,p:{y:415.275}},{t:this.shape_17,p:{y:414.8}},{t:this.shape_6,p:{y:447.9}},{t:this.shape_19,p:{y:419.875}}]},1).to({state:[{t:this.shape_4,p:{y:405.375}},{t:this.shape_18,p:{y:408.1}},{t:this.shape_6,p:{y:438}},{t:this.shape_17,p:{y:404.9}},{t:this.shape_16,p:{y:409.975}}]},1).to({state:[{t:this.shape_4,p:{y:395.425}},{t:this.shape_15},{t:this.shape_14,p:{y:394.95}},{t:this.shape_13,p:{y:428.05}},{t:this.shape_12,p:{y:400.025}}]},1).to({state:[{t:this.shape_4,p:{y:385.475}},{t:this.shape_11},{t:this.shape_7,p:{y:385}},{t:this.shape_10,p:{y:418.1}},{t:this.shape_9}]},1).to({state:[{t:this.shape_4,p:{y:375.575}},{t:this.shape_8,p:{y:378.3}},{t:this.shape_7,p:{y:375.1}},{t:this.shape_6,p:{y:408.2}},{t:this.shape_5,p:{y:380.175}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_4,p:{y:365.625}},{t:this.shape_3,p:{y:398.25}},{t:this.shape,p:{y:370.225}}]},1).wait(1));

	// Cable
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EACRAtpMgAUhbREgB8AtpMgAUhbR");
	this.shape_87.setTransform(96.55,76.025);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3B3B3B").s().p("AgPAPQgFgGAAgJQAAgIAFgGQAHgHAIAAQAJAAAGAHQAHAGgBAIQABAJgHAGQgGAGgJABQgIgBgHgGg");
	this.shape_88.setTransform(97.7,366.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgB8AtpMgAUhbREACRAtpMgAUhbR");
	this.shape_89.setTransform(96.55,76.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCVgtoIANVRIgNSwIAXVaIgLOYIAIPeEACAgtoIAMVRIgNSwIAXVaIgLOYIAJPe");
	this.shape_90.setTransform(97.025,84.125);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3B3B3B").s().p("AgPAOQgFgHAAgIQAAgJAFgGQAYgGAGAGQAHAGgBAJQABAIgHAHQgGAGgJAAQgIAAgHgGg");
	this.shape_91.setTransform(97.7,374.55);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCEAtpIgNveIAYuYIgp1aIAeywIgU1REACYAtpIgOveIAZuYIgp1aIAdywIgT1R");
	this.shape_92.setTransform(97.3251,92.225);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCYgtoIANUmIgNTbIAZVdIgFdzEACBgtoIAMUmIgMTbIAYVdIgEdz");
	this.shape_93.setTransform(97.3499,101.225);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3B3B3B").s().p("AgPAOQgFgHAAgHQAAgKAFgGQAYgGAGAGQAHAGgBAKQABAHgHAHQgGAGgJAAQgIAAgHgGg");
	this.shape_94.setTransform(97.7,391.65);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCbgtoMAASA9hIAPOLIgNPlEAB7gtoMAARA9hIAQOLIgNPl");
	this.shape_95.setTransform(97.6252,110.225);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EACHAtpIAavoIgjuEIAJ1kIgV0yIABzPEgCMAtpIAbvoIgkuEIAJ1kIgV0yIABzP");
	this.shape_96.setTransform(98.101,119.225);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCXgtnIABTOIANUzIgCVjIAUOFIgMPmEAB5gtnIABTOIANUzIgCVjIATOFIgLPm");
	this.shape_97.setTransform(97.2752,126.85);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCTgtoIAKVRIgHSwIARVaIgGOYIAGPeEACAgtoIAJVRIgHSwIARVaIgGOYIAHPe");
	this.shape_98.setTransform(96.8,142.925);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3B3B3B").s().p("AgPANQgFgFAAgJQAAgIAFgHQAYgGAGAGQAHAHgBAIQABAJgHAFQgGAHgJAAQgIAAgHgHg");
	this.shape_99.setTransform(97.7,433.35);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCWgtoIAPVRIgSSwIAdVaIgQOYIAKPeEACBgtoIAPVRIgTSwIAdVaIgPOYIAKPe");
	this.shape_100.setTransform(97.125,151.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3B3B3B").s().p("AgPANQgFgGAAgHQAAgJAFgHQAYgGAGAGQAHAHgBAJQABAHgHAGQgGAHgJAAQgIAAgHgHg");
	this.shape_101.setTransform(97.7,441.75);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EACYAtpIgOveIAZuYIgp1aIAdywIgT1REgCEAtpIgNveIAYuYIgp1aIAeywIgU1R");
	this.shape_102.setTransform(97.3251,159.725);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3B3B3B").s().p("AgPAOQgFgGAAgJQAAgJAFgGQAYgGAGAGQAHAGgBAJQABAJgHAGQgGAGgJAAQgIAAgHgGg");
	this.shape_103.setTransform(97.7,466.35);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCMAtpIAbvoIgkuEIAJ1kIgV0yIABzPEACHAtpIAavoIgjuEIAJ1kIgV0yIABzP");
	this.shape_104.setTransform(98.101,184.025);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCXgtoIABTPIANUyIgCVkIAUOEIgMPoEAB5gtoIABTPIANUyIgCVkIATOEIgLPo");
	this.shape_105.setTransform(97.2752,192.55);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3B3B3B").s().p("AgPAOQgFgGAAgIQAAgKAFgGQAYgGAGAGQAHAGgBAKQABAIgHAGQgGAGgJAAQgIAAgHgGg");
	this.shape_106.setTransform(97.7,499.65);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3B3B3B").s().p("AgPAOQgFgGAAgJQAAgIAFgHQAYgGAGAGQAHAHgBAIQABAJgHAGQgGAGgJAAQgIAAgHgGg");
	this.shape_107.setTransform(97.7,563.85);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCXgtnIABTPIANUyIgCVjIAUOFIgMPnEAB5gtnIABTPIANUyIgCVjIATOFIgLPn");
	this.shape_108.setTransform(97.2752,319.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3B3B3B").s().p("AgPAPQgFgGAAgJQAAgIAFgGQAHgGAIgBQAJABAGAGQAHAGgBAIQABAJgHAGQgGAGgJAAQgIAAgHgGg");
	this.shape_109.setTransform(97.7,614);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCXgtnIABTOIANUzIgCVjIAUOEIgMPoEAB5gtnIABTOIANUzIgCVjIATOEIgLPo");
	this.shape_110.setTransform(97.2752,522.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCQgtoMAAUBbREAB9gtoMAAUBbR");
	this.shape_111.setTransform(96.55,548.175);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3B3B3B").s().p("AgPANQgFgGAAgHQAAgKAFgGQAYgGAGAGQAHAGgBAKQABAHgHAGQgGAHgJAAQgIAAgHgHg");
	this.shape_112.setTransform(97.7,850.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3B3B3B").s().p("AgPAOQgFgHAAgIQAAgIAFgHQAYgGAGAGQAHAHgBAIQABAIgHAHQgGAGgJAAQgIAAgHgGg");
	this.shape_113.setTransform(97.7,765.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3B3B3B").s().p("AgPAPQgFgGAAgJQAAgIAFgHQAHgFAIgBQAJABAGAFQAHAHgBAIQABAJgHAGQgGAGgJAAQgIAAgHgGg");
	this.shape_114.setTransform(97.7,721.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3B3B3B").s().p("AgPAPQgFgGAAgJQAAgIAFgGQAHgHAIABQAJgBAGAHQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgHgHg");
	this.shape_115.setTransform(97.7,664);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3B3B3B").s().p("AgPAPQgFgGAAgJQAAgIAFgHQAHgFAIAAQAJAAAGAFQAHAHgBAIQABAJgHAGQgGAHgJgBQgIABgHgHg");
	this.shape_116.setTransform(97.7,644.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCbgtoMAASA9iIAPOKIgNPlEAB7gtoMAARA9iIAQOKIgNPl");
	this.shape_117.setTransform(97.6252,267.675);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3B3B3B").s().p("AgPAPQgFgGAAgJQAAgIAFgGQAHgHAIAAQAJAAAGAHQAHAGgBAIQABAJgHAGQgGAGgJAAQgIAAgHgGg");
	this.shape_118.setTransform(97.7,501.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88,p:{y:366.3}},{t:this.shape_87,p:{y:76.025}}]}).to({state:[{t:this.shape_88,p:{y:366.3}},{t:this.shape_89,p:{y:76.025}}]},49).to({state:[{t:this.shape_91,p:{y:374.55}},{t:this.shape_90,p:{y:84.125}}]},1).to({state:[{t:this.shape_88,p:{y:382.5}},{t:this.shape_92,p:{y:92.225}}]},1).to({state:[{t:this.shape_94,p:{y:391.65}},{t:this.shape_93,p:{y:101.225}}]},1).to({state:[{t:this.shape_94,p:{y:400.65}},{t:this.shape_95,p:{y:110.225}}]},1).to({state:[{t:this.shape_88,p:{y:409.5}},{t:this.shape_96,p:{y:119.225}}]},1).to({state:[{t:this.shape_91,p:{y:417.3}},{t:this.shape_97}]},1).to({state:[{t:this.shape_88,p:{y:424.8}},{t:this.shape_89,p:{y:134.525}}]},1).to({state:[{t:this.shape_99,p:{y:433.35}},{t:this.shape_98,p:{y:142.925}}]},1).to({state:[{t:this.shape_101,p:{y:441.75}},{t:this.shape_100,p:{y:151.325}}]},1).to({state:[{t:this.shape_88,p:{y:450}},{t:this.shape_102,p:{y:159.725}}]},1).to({state:[{t:this.shape_94,p:{y:458.25}},{t:this.shape_93,p:{y:167.825}}]},1).to({state:[{t:this.shape_103},{t:this.shape_95,p:{y:175.925}}]},1).to({state:[{t:this.shape_88,p:{y:474.3}},{t:this.shape_104,p:{y:184.025}}]},1).to({state:[{t:this.shape_94,p:{y:483}},{t:this.shape_105,p:{y:192.55}}]},1).to({state:[{t:this.shape_88,p:{y:491.4}},{t:this.shape_87,p:{y:201.125}}]},1).to({state:[{t:this.shape_106,p:{y:499.65}},{t:this.shape_98,p:{y:209.225}}]},1).to({state:[{t:this.shape_94,p:{y:507.75}},{t:this.shape_100,p:{y:217.325}}]},1).to({state:[{t:this.shape_88,p:{y:515.7}},{t:this.shape_92,p:{y:225.425}}]},1).to({state:[{t:this.shape_101,p:{y:523.65}},{t:this.shape_93,p:{y:233.225}}]},1).to({state:[{t:this.shape_99,p:{y:531.45}},{t:this.shape_95,p:{y:241.025}}]},1).to({state:[{t:this.shape_88,p:{y:539.1}},{t:this.shape_96,p:{y:248.825}}]},1).to({state:[{t:this.shape_106,p:{y:547.35}},{t:this.shape_105,p:{y:256.9}}]},1).to({state:[{t:this.shape_88,p:{y:555.3}},{t:this.shape_89,p:{y:265.025}}]},1).to({state:[{t:this.shape_107,p:{y:563.85}},{t:this.shape_98,p:{y:273.425}}]},1).to({state:[{t:this.shape_101,p:{y:572.25}},{t:this.shape_100,p:{y:281.825}}]},1).to({state:[{t:this.shape_88,p:{y:580.5}},{t:this.shape_102,p:{y:290.225}}]},1).to({state:[{t:this.shape_91,p:{y:588.75}},{t:this.shape_93,p:{y:298.325}}]},1).to({state:[{t:this.shape_106,p:{y:596.85}},{t:this.shape_95,p:{y:306.425}}]},1).to({state:[{t:this.shape_88,p:{y:604.8}},{t:this.shape_104,p:{y:314.525}}]},1).to({state:[{t:this.shape_91,p:{y:609.55}},{t:this.shape_108,p:{y:319.1}}]},1).to({state:[{t:this.shape_109,p:{y:614}},{t:this.shape_89,p:{y:323.725}}]},1).to({state:[{t:this.shape_88,p:{y:638.1}},{t:this.shape_87,p:{y:347.825}}]},1).to({state:[{t:this.shape_91,p:{y:649.95}},{t:this.shape_90,p:{y:359.525}}]},1).to({state:[{t:this.shape_88,p:{y:661.5}},{t:this.shape_102,p:{y:371.225}}]},1).to({state:[{t:this.shape_101,p:{y:674.85}},{t:this.shape_93,p:{y:384.425}}]},1).to({state:[{t:this.shape_99,p:{y:688.05}},{t:this.shape_95,p:{y:397.625}}]},1).to({state:[{t:this.shape_88,p:{y:701.1}},{t:this.shape_104,p:{y:410.825}}]},1).to({state:[{t:this.shape_94,p:{y:713.85}},{t:this.shape_105,p:{y:423.4}}]},1).to({state:[{t:this.shape_88,p:{y:726.3}},{t:this.shape_87,p:{y:436.025}}]},1).to({state:[{t:this.shape_99,p:{y:738.45}},{t:this.shape_98,p:{y:448.025}}]},1).to({state:[{t:this.shape_101,p:{y:750.45}},{t:this.shape_100,p:{y:460.025}}]},1).to({state:[{t:this.shape_88,p:{y:762.3}},{t:this.shape_92,p:{y:472.025}}]},1).to({state:[{t:this.shape_101,p:{y:774.75}},{t:this.shape_93,p:{y:484.325}}]},1).to({state:[{t:this.shape_99,p:{y:787.05}},{t:this.shape_95,p:{y:496.625}}]},1).to({state:[{t:this.shape_88,p:{y:799.2}},{t:this.shape_96,p:{y:508.925}}]},1).to({state:[{t:this.shape_94,p:{y:812.85}},{t:this.shape_110}]},1).to({state:[{t:this.shape_88,p:{y:826.2}},{t:this.shape_89,p:{y:535.925}}]},1).to({state:[{t:this.shape_91,p:{y:838.6}},{t:this.shape_111,p:{y:548.175}}]},1).to({state:[{t:this.shape_112,p:{y:850.9}},{t:this.shape_111,p:{y:560.475}}]},1).to({state:[{t:this.shape_88,p:{y:863}},{t:this.shape_89,p:{y:572.725}}]},1).to({state:[{t:this.shape_88,p:{y:863}},{t:this.shape_87,p:{y:572.725}}]},1).to({state:[{t:this.shape_112,p:{y:850.9}},{t:this.shape_111,p:{y:560.475}}]},1).to({state:[{t:this.shape_91,p:{y:838.6}},{t:this.shape_111,p:{y:548.175}}]},1).to({state:[{t:this.shape_88,p:{y:826.2}},{t:this.shape_87,p:{y:535.925}}]},1).to({state:[{t:this.shape_94,p:{y:812.85}},{t:this.shape_110}]},1).to({state:[{t:this.shape_88,p:{y:799.2}},{t:this.shape_104,p:{y:508.925}}]},1).to({state:[{t:this.shape_101,p:{y:791.4}},{t:this.shape_95,p:{y:500.975}}]},1).to({state:[{t:this.shape_112,p:{y:783.4}},{t:this.shape_93,p:{y:492.975}}]},1).to({state:[{t:this.shape_88,p:{y:775.3}},{t:this.shape_92,p:{y:485.025}}]},1).to({state:[{t:this.shape_113,p:{y:765.8}},{t:this.shape_100,p:{y:475.375}}]},1).to({state:[{t:this.shape_99,p:{y:756.1}},{t:this.shape_98,p:{y:465.675}}]},1).to({state:[{t:this.shape_109,p:{y:746.3}},{t:this.shape_89,p:{y:456.025}}]},1).to({state:[{t:this.shape_113,p:{y:733.85}},{t:this.shape_105,p:{y:443.4}}]},1).to({state:[{t:this.shape_114,p:{y:721.1}},{t:this.shape_96,p:{y:430.825}}]},1).to({state:[{t:this.shape_112,p:{y:711.4}},{t:this.shape_95,p:{y:420.975}}]},1).to({state:[{t:this.shape_112,p:{y:701.5}},{t:this.shape_93,p:{y:411.075}}]},1).to({state:[{t:this.shape_114,p:{y:691.5}},{t:this.shape_92,p:{y:401.225}}]},1).to({state:[{t:this.shape_99,p:{y:679.95}},{t:this.shape_90,p:{y:389.525}}]},1).to({state:[{t:this.shape_114,p:{y:668.1}},{t:this.shape_89,p:{y:377.825}}]},1).to({state:[{t:this.shape_115},{t:this.shape_87,p:{y:373.725}}]},1).to({state:[{t:this.shape_91,p:{y:654.55}},{t:this.shape_108,p:{y:364.1}}]},1).to({state:[{t:this.shape_116,p:{y:644.8}},{t:this.shape_96,p:{y:354.525}}]},1).to({state:[{t:this.shape_99,p:{y:636.85}},{t:this.shape_95,p:{y:346.425}}]},1).to({state:[{t:this.shape_99,p:{y:628.75}},{t:this.shape_93,p:{y:338.325}}]},1).to({state:[{t:this.shape_116,p:{y:620.5}},{t:this.shape_92,p:{y:330.225}}]},1).to({state:[{t:this.shape_106,p:{y:608.9}},{t:this.shape_100,p:{y:318.475}}]},1).to({state:[{t:this.shape_106,p:{y:597.2}},{t:this.shape_98,p:{y:306.775}}]},1).to({state:[{t:this.shape_114,p:{y:585.3}},{t:this.shape_87,p:{y:295.025}}]},1).to({state:[{t:this.shape_107,p:{y:577.35}},{t:this.shape_105,p:{y:286.9}}]},1).to({state:[{t:this.shape_114,p:{y:569.1}},{t:this.shape_104,p:{y:278.825}}]},1).to({state:[{t:this.shape_99,p:{y:558.1}},{t:this.shape_117}]},1).to({state:[{t:this.shape_91,p:{y:547}},{t:this.shape_93,p:{y:256.575}}]},1).to({state:[{t:this.shape_114,p:{y:535.7}},{t:this.shape_102,p:{y:245.425}}]},1).to({state:[{t:this.shape_91,p:{y:524.4}},{t:this.shape_100,p:{y:233.975}}]},1).to({state:[{t:this.shape_99,p:{y:513}},{t:this.shape_98,p:{y:222.575}}]},1).to({state:[{t:this.shape_118},{t:this.shape_89,p:{y:211.125}}]},1).to({state:[{t:this.shape_101,p:{y:498}},{t:this.shape_105,p:{y:207.55}}]},1).to({state:[{t:this.shape_109,p:{y:494.3}},{t:this.shape_96,p:{y:204.025}}]},1).to({state:[{t:this.shape_99,p:{y:479.7}},{t:this.shape_95,p:{y:189.275}}]},1).to({state:[{t:this.shape_106,p:{y:464.9}},{t:this.shape_93,p:{y:174.475}}]},1).to({state:[{t:this.shape_88,p:{y:450}},{t:this.shape_92,p:{y:159.725}}]},1).to({state:[{t:this.shape_101,p:{y:441.75}},{t:this.shape_100,p:{y:151.325}}]},1).to({state:[{t:this.shape_99,p:{y:433.35}},{t:this.shape_98,p:{y:142.925}}]},1).to({state:[{t:this.shape_88,p:{y:424.8}},{t:this.shape_87,p:{y:134.525}}]},1).to({state:[{t:this.shape_91,p:{y:417.3}},{t:this.shape_97}]},1).to({state:[{t:this.shape_88,p:{y:409.5}},{t:this.shape_104,p:{y:119.225}}]},1).to({state:[{t:this.shape_94,p:{y:400.65}},{t:this.shape_95,p:{y:110.225}}]},1).to({state:[{t:this.shape_94,p:{y:391.65}},{t:this.shape_93,p:{y:101.225}}]},1).to({state:[{t:this.shape_88,p:{y:382.5}},{t:this.shape_102,p:{y:92.225}}]},1).to({state:[{t:this.shape_91,p:{y:374.55}},{t:this.shape_90,p:{y:84.125}}]},1).to({state:[{t:this.shape_88,p:{y:366.3}},{t:this.shape_87,p:{y:76.025}}]},1).wait(1));

	// Door
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#252525").s().p("AhJrUICOACIAFWlIiQACg");
	this.shape_119.setTransform(37.425,487.775);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#252525").s().p("AhGrUICIACIAFWlIiKACg");
	this.shape_120.setTransform(37.7,487.775);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#252525").s().p("AhDrUICCADIAFWkIiFACg");
	this.shape_121.setTransform(37.975,487.75);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#252525").s().p("AhBrUIB9ACIAGWkIiBADg");
	this.shape_122.setTransform(38.25,487.75);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#252525").s().p("Ag+rUIB4ACIAFWlIh6ACg");
	this.shape_123.setTransform(38.5,487.725);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#252525").s().p("Ag7rUIByACIAFWlIh1ACg");
	this.shape_124.setTransform(38.775,487.725);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#252525").s().p("Ag5rUIBtACIAGWlIhxACg");
	this.shape_125.setTransform(39.05,487.725);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#252525").s().p("Ag2rTIBoABIAFWlIhrACg");
	this.shape_126.setTransform(39.325,487.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#252525").s().p("AgzrTIBiABIAFWlIhlACg");
	this.shape_127.setTransform(39.6,487.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#252525").s().p("AgwrTIBcABIAFWlIhgABg");
	this.shape_128.setTransform(39.875,487.675);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#252525").s().p("AgurTIBXABIAGWlIhbABg");
	this.shape_129.setTransform(40.15,487.675);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#252525").s().p("AgrrTIBSABIAFWlIhWABg");
	this.shape_130.setTransform(40.425,487.675);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#252525").s().p("AgorTIBMABIAFWkIhQACg");
	this.shape_131.setTransform(40.675,487.65);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#252525").s().p("AgmrTIBHABIAGWkIhMACg");
	this.shape_132.setTransform(40.95,487.65);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#252525").s().p("AgjrTIBCABIAFWkIhGACg");
	this.shape_133.setTransform(41.225,487.65);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#252525").s().p("AggrTIA8ABIAFWlIhAABg");
	this.shape_134.setTransform(41.5,487.625);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#252525").s().p("AgdrTIA2ABIAFWlIg7ABg");
	this.shape_135.setTransform(41.775,487.625);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#252525").s().p("AgarSIAwAAIAGWlIg2ABg");
	this.shape_136.setTransform(42.05,487.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#252525").s().p("AgYrSIAsAAIAFWlIgwABg");
	this.shape_137.setTransform(42.325,487.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#252525").s().p("AgVrSIAmAAIAFWlIgrABg");
	this.shape_138.setTransform(42.6,487.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#252525").s().p("AgTrSIAhAAIAGWlIgmAAg");
	this.shape_139.setTransform(42.85,487.575);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#252525").s().p("AgQrSIAcAAIAFWkIggABg");
	this.shape_140.setTransform(43.125,487.575);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#252525").s().p("AgNrSIAWAAIAFWkIgbABg");
	this.shape_141.setTransform(43.4,487.55);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#252525").s().p("AgKrSIAQAAIAFWkIgVABg");
	this.shape_142.setTransform(43.675,487.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119}]}).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_119).wait(1).to({_off:true},1).wait(46).to({_off:false},0).wait(2).to({y:497.725},0).wait(1).to({y:507.625},0).wait(1).to({y:517.575},0).wait(1).to({y:527.525},0).wait(1).to({y:537.425},0).wait(1).to({y:547.375},0).wait(1).to({y:557.325},0).wait(1).to({y:567.225},0).wait(1).to({y:577.175},0).wait(1).to({y:587.125},0).wait(1).to({y:597.025},0).wait(1).to({y:606.975},0).wait(1).to({y:616.925},0).wait(1).to({y:626.875},0).wait(1).to({y:636.775},0).wait(1).to({y:646.725},0).wait(1).to({y:656.675},0).wait(1).to({y:666.575},0).wait(1).to({y:676.525},0).wait(1).to({y:686.475},0).wait(1).to({y:696.375},0).wait(1).to({y:706.325},0).wait(1).to({y:716.275},0).wait(1).to({y:726.175},0).wait(1).to({y:736.125},0).wait(1).to({y:746.075},0).wait(1).to({y:755.975},0).wait(1).to({y:765.925},0).wait(1).to({y:775.875},0).wait(1).to({y:785.775},0).wait(1).to({y:795.725},0).wait(1).to({y:805.675},0).wait(1).to({y:815.575},0).wait(1).to({y:825.525},0).wait(1).to({y:835.475},0).wait(1).to({y:845.375},0).wait(1).to({y:855.325},0).wait(1).to({y:865.275},0).wait(1).to({y:875.225},0).wait(1).to({y:885.125},0).wait(1).to({y:895.075},0).wait(1).to({y:905.025},0).wait(1).to({y:914.925},0).wait(1).to({y:924.875},0).wait(1).to({y:934.825},0).wait(1).to({y:944.725},0).wait(1).to({y:954.675},0).wait(1).to({y:964.625},0).wait(1).to({y:974.525},0).wait(1).to({y:984.475},0).wait(2).to({y:974.525},0).wait(1).to({y:964.625},0).wait(1).to({y:954.675},0).wait(1).to({y:944.725},0).wait(1).to({y:934.825},0).wait(1).to({y:924.875},0).wait(1).to({y:914.925},0).wait(1).to({y:905.025},0).wait(1).to({y:895.075},0).wait(1).to({y:885.125},0).wait(1).to({y:875.225},0).wait(1).to({y:865.275},0).wait(1).to({y:855.325},0).wait(1).to({y:845.375},0).wait(1).to({y:835.475},0).wait(1).to({y:825.525},0).wait(1).to({y:815.575},0).wait(1).to({y:805.675},0).wait(1).to({y:795.725},0).wait(1).to({y:785.775},0).wait(1).to({y:775.875},0).wait(1).to({y:765.925},0).wait(1).to({y:755.975},0).wait(1).to({y:746.075},0).wait(1).to({y:736.125},0).wait(1).to({y:726.175},0).wait(1).to({y:716.275},0).wait(1).to({y:706.325},0).wait(1).to({y:696.375},0).wait(1).to({y:686.475},0).wait(1).to({y:676.525},0).wait(1).to({y:666.575},0).wait(1).to({y:656.675},0).wait(1).to({y:646.725},0).wait(1).to({y:636.775},0).wait(1).to({y:626.875},0).wait(1).to({y:616.925},0).wait(1).to({y:606.975},0).wait(1).to({y:597.025},0).wait(1).to({y:587.125},0).wait(1).to({y:577.175},0).wait(1).to({y:567.225},0).wait(1).to({y:557.325},0).wait(1).to({y:547.375},0).wait(1).to({y:537.425},0).wait(1).to({y:527.525},0).wait(1).to({y:517.575},0).wait(1).to({y:507.625},0).wait(1).to({y:497.725},0).wait(1).to({y:487.775},0).wait(1));

	// Elevator
	this.instance = new lib.elevatorCar("synched",0);
	this.instance.setTransform(96.2,485.05,1,1,0,0,0,0.1,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({startPosition:0},0).to({y:981.85},50).wait(1).to({startPosition:0},0).to({y:485.05},50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,-220,132.5,1287.4);


// stage content:
(lib.gameBoard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {elevatorWindow_mc:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Buttons
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(275.95,340.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(287.9,280.95,0.5,0.5);

	this.btnBankOpen = new lib.btnTemplate();
	this.btnBankOpen.name = "btnBankOpen";
	this.btnBankOpen.setTransform(350.7,294.05);
	new cjs.ButtonHelper(this.btnBankOpen, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.btnBankClose = new lib.btnTemplate();
	this.btnBankClose.name = "btnBankClose";
	this.btnBankClose.setTransform(350.7,354.05);
	new cjs.ButtonHelper(this.btnBankClose, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(58.05,468.15,0.5,0.5);

	this.btnElevUp = new lib.btnTemplate();
	this.btnElevUp.name = "btnElevUp";
	this.btnElevUp.setTransform(124.8,481.25);
	new cjs.ButtonHelper(this.btnElevUp, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(26.95,343.95,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_2();
	this.instance_4.setTransform(63.65,405,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_1();
	this.instance_5.setTransform(33.05,279.25,0.5,0.5);

	this.btnElevClose = new lib.btnTemplate();
	this.btnElevClose.name = "btnElevClose";
	this.btnElevClose.setTransform(124.75,357.05);
	new cjs.ButtonHelper(this.btnElevClose, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.btnElevDown = new lib.btnTemplate();
	this.btnElevDown.name = "btnElevDown";
	this.btnElevDown.setTransform(125.85,418.3);
	new cjs.ButtonHelper(this.btnElevDown, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.btnElevOpen = new lib.btnTemplate();
	this.btnElevOpen.name = "btnElevOpen";
	this.btnElevOpen.setTransform(124.75,292.05);
	new cjs.ButtonHelper(this.btnElevOpen, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnElevOpen},{t:this.btnElevDown},{t:this.btnElevClose},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.btnElevUp},{t:this.instance_2},{t:this.btnBankClose},{t:this.btnBankOpen},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Mine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5B5B5").s().p("EhP+AUDMgABgoFMCf/AAAMAAAAoFg");
	this.shape.setTransform(511.95,388.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Elevator
	this.elevator_mc = new lib.elevator_mc();
	this.elevator_mc.name = "elevator_mc";
	this.elevator_mc.setTransform(858.2,-316.25);

	this.timeline.addTween(cjs.Tween.get(this.elevator_mc).wait(1));

	// ElevatorWindow
	this.elevatorWindow_mc = new lib.elevatorWindow_mc();
	this.elevatorWindow_mc.name = "elevatorWindow_mc";
	this.elevatorWindow_mc.setTransform(858.2,-316.25);

	this.timeline.addTween(cjs.Tween.get(this.elevatorWindow_mc).wait(1));

	// Miner
	this.instance_6 = new lib.l_miner("synched",0);
	this.instance_6.setTransform(812.4,176.6,1,1,0,0,180,25.2,0.1);

	this.instance_7 = new lib.l_miner("synched",0);
	this.instance_7.setTransform(770.6,340.8,1,1,0,0,0,25.2,0.1);

	this.instance_8 = new lib.l_miner("synched",0);
	this.instance_8.setTransform(820.9,676.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Shaft
	this.instance_9 = new lib.shaft("synched",0);
	this.instance_9.setTransform(949.9,510.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Divider
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(5,2,1).p("EhPogUTMCfPAAAEhPnAUUMCfPgAB");
	this.shape_1.setTransform(512.1001,388.2501);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Town
	this.town_mc = new lib.town();
	this.town_mc.name = "town_mc";

	this.timeline.addTween(cjs.Tween.get(this.town_mc).wait(1));

	// Tunnel
	this.instance_10 = new lib.tunnel_mc();
	this.instance_10.setTransform(512.05,640);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-366.6,-152.3,1403.5,934.8);
// library properties:
lib.properties = {
	id: '73B975183377F54C91972C7230FF1CDC',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/themine_atlas_1.png", id:"themine_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['73B975183377F54C91972C7230FF1CDC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
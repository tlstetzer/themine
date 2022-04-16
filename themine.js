(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"themine_atlas_1", frames: [[0,413,1759,54],[0,364,122,45],[826,0,500,411],[1328,0,454,77],[0,0,824,362],[1761,244,263,53],[1581,354,241,53],[1698,134,347,53],[1784,0,256,53],[1717,79,304,53],[1761,409,233,53],[1761,189,271,53],[1328,354,251,53],[1824,354,183,53],[1328,79,387,53],[1761,299,253,53],[1328,134,368,53]]}
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



(lib.CachedBmp_17 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["themine_atlas_1"]);
	this.gotoAndStop(16);
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


(lib.waist_lq = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAFACIgLAAIAAgDIALAAQADABgDACg");
	this.shape.setTransform(-14.7,-7.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6A600").s().p("AgGACIAAgDIALAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABg");
	this.shape_1.setTransform(-14.7,-7.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// buckle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AALgJIABAAIAAAFIgBAAIAAAKIAAAEIgEAAIgNAAAALgJIAAAFAALAGIABAAIAAAEIgFAAAgFAGIAMAAIAAgKIgNAAIAAAKAgKgJIAAAFIAAAKIgBAAIAAAEIAFAAAgKgJIgBAAIAAAFIABAAAgKAGIAAAEIAEAAAgKgJIAVAA");
	this.shape_2.setTransform(-15.025,-7.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A6A600").s().p("AAHAKIgNAAIgEAAIAAgEIAAgKIgBAAIAAgFIABAAIAAAFIAAgFIAVAAIAAAFIAAAKIAAAEIgEAAIAEAAIAAgEIABAAIAAAEgAgGAGIABAAIAMAAIAAgKIgNAAgAgLAKIAAgEIABAAIAAAEIAEAAgAgKAGgAALgEIAAgFIABAAIAAAFgAALgEg");
	this.shape_3.setTransform(-15.025,-7.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// holes
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AhGAAQAAABgBABQAAAAgBAAQgBAAgBAAQAAgBAAgBQAAAAAAAAQABgBABAAQABAAAAABQABAAAAAAgAg0AAQAAABgBABQAAAAgBAAQgBAAgBAAQAAgBAAgBQAAAAAAAAQABgBABAAQABAAAAABQABAAAAAAgAghAAQAAABgBABQAAAAgCAAQgBAAAAAAQgBgBAAgBQAAAAABAAQAAgBABAAQACAAAAABQABAAAAAAgAAkAAQAAABgBABQAAAAgBAAQgBAAgBAAQgBgBAAgBQAAAAABAAQABgBABAAQABAAAAABQABAAAAAAgABLAAQAAABAAABQgBAAgBAAQgBAAAAAAQgBgBAAgBQAAAAABAAQAAgBABAAQABAAABABQAAAAAAAAgAAAAAQAAABgBABQAAAAgBAAQgBAAAAAAQgBgBAAgBQAAAAABAAQAAgBABAAQABAAAAABQABAAAAAAgAASAAQAAABgBABQgBAAgBAAQgBAAAAAAQgBgBAAgBQAAAAABAAQAAgBABAAQABAAABABQABAAAAAAg");
	this.shape_4.setTransform(-7.9,-7.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABIACIgBgCIABAAIABgBIABABIABAAIgBACIgBAAIgBAAgAAgACIgBgCIABAAIABgBIACABIABAAIgBACIgCAAIgBAAgAANACIAAgCIAAAAIACgBIACABIABAAIgBACIgCAAIgCAAgAgEACIAAgCIAAAAIACgBIACABIAAAAIAAACIgCAAIgCAAgAglACIgBgCIABAAIACgBIABABIABAAIgBACIgBAAIgCAAgAg4ACIAAgCIAAAAIACgBIACABIABAAIgBACIgCAAIgCAAgAhKACIAAgCIAAAAIACgBIACABIAAAAIAAACIgCAAIgCAAg");
	this.shape_5.setTransform(-7.9,-7.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// loops
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AAlgLIAGAAIAAAXIgGAAgAgqgLIAGAAIAAAXIgGAAg");
	this.shape_6.setTransform(-6.375,-7.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#708DAE").s().p("AAlAMIAAgXIAGAAIAAAXgAgqAMIAAgXIAGAAIAAAXg");
	this.shape_7.setTransform(-6.375,-7.375);

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
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("Ag+grIAEA6QAAAWgKACAgWgqQgBAMABAKQABA4AhALABDgtIgIBWIAUAAAhHAoIgHhI");
	this.shape_10.setTransform(-7.5,-3.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// line
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAA7QgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQgFgMAFgHQACgEgBgHIgDgWIgBgUIAAAAIABgUIABgRQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQABAGgCANIgBATIAAAAIABATIADAWQABALgEAGQgBAEACAGQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAIgCAAIgBAAg");
	this.shape_11.setTransform(-6.1363,-2.674);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// waist
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AhJA2QgRg0gCg4IC5AAQgCA5gLA0");
	this.shape_12.setTransform(-7.85,-2.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#708DAE").s().p("AhJA2QgRg0gCg4IC5AAQgCA5gLA0g");
	this.shape_13.setTransform(-7.85,-2.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-9.5,20.900000000000002,13.8);


(lib.torso_lq = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Buttons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABCbIgBgCQgDgFACgGIABgBIABAAIACABIAAACQgBADACAEIAAACIgBABIgCABIAAAAgAgBCKIgBgCQgBgKgCgIIAAAAQgCgJABgOIACgWQABgHgCgKQgCgKAAgKIgBgVIAAAAQAAgLACgIIABgBIACgBIABABIABACQgCAIAAAKIAAAAIABAVIAAAAQAAAKACAJQABALgBAHIgBAWQgBAOACAHQABAJABAKIAAACIgCABIAAAAIgBAAgAgEgJIgCgBIAAgCQACgGAAgMIAAgUIAAgBIABgVQAAgNACgKIAAAAQACgJgBgIIAAgSQABgIADgOIABgBIACgBIABABIABACQgDAOgBAHIAAARQABAKgDAJQgCAKAAAMIgBAWIAAAUQAAANgBAGIgBACIgCAAIAAAAg");
	this.shape.setTransform(-6.8795,-15.3217);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Collar
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhSADICZgqQARAhgIAMIiQAig");
	this.shape_1.setTransform(1.1133,-32.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7D0000").s().p("AhSADICZgqQARAhgIAMIiQAig");
	this.shape_2.setTransform(1.1133,-32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Body
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhNiaICmgKQAPCrgJCeIi4gBQgWihAiidg");
	this.shape_3.setTransform(0.4756,-16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D0000").s().p("AhZCkQgWihAiidICmgKQAPCrgJCeg");
	this.shape_4.setTransform(0.4756,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-37.7,21.700000000000003,38.7);


(lib.knee_lq = function(mode,startPosition,loop,reversed) {
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
	this.shape_2.graphics.f("#000000").s().p("AgCB3QgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAgGQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAGQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgCBkQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAgUIAAgWIgBgVIAAgBIAAgSIAAgRQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAABIAAARIAAASIABAWIAAAWIAAAUQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgDgKQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQgDgMAEgLIAAAAQADgJgBgJQgCgKAAgNIAAAAIAAgRIAAAAIgBgUQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABgBAAABQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIABAUIAAABIAAARQAAAMACAKQABALgEALIAAAAQgCAJACAJQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAABIAAAAIgDgBg");
	this.shape_2.setTransform(3.1828,85.8994);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// calf
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ABEh7IgMEbAg4CfIgLkLQAFgSALgLQALgMAYgJIANgBQAgAAARAIQARAJAFAT");
	this.shape_3.setTransform(1.6,82.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#708DAE").s().p("Ag4CfIgLkLQAFgSALgLQALgMAYgJIANgBQAgAAARAJQARAIAFATIAAAAIgMEbg");
	this.shape_4.setTransform(1.6,82.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,65.9,15.600000000000001,35.5);


(lib.hip_lq = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgBCKQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABAAIgBgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAABQABAAAAAAQABAAAAAAQAAABABAAQACABgBAGQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgCABIgBgBgAgBB7QAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQADgOAAgIIgCgSIgBgUIgBgWIAAAAIAAgTIAAgRIAAAAIABgUQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABIgBATIAAARIAAATIABAWIABATIACASQAAAKgEAQQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIgCAAIgBAAgAAAgcQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIADgSQABgLgEgKQgEgMACgMIAAAAQACgKAAgHIAAgTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAIAAATQAAAHgCAMQgCAKAEAJQAEAMgBANIgDATQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgDABIAAgBg");
	this.shape.setTransform(-70.5264,73.1552);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// thigh
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhFCyIgIkWQAAggAXgWQAUgVAegBQACgBACAAIAAAAQACAAABABQAeABAWAVQAXAWAAAgIAAABQAAAEgBACIgMDt");
	this.shape_1.setTransform(-72,70.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#708DAE").s().p("AhDCxIgBgBIgIkWQAAgfAWgXQAVgUAdgBIAEgBIAAAAIAEABQAdABAWAUQAWAXAAAgIAAABIAAAGIgMDtQgBAMgCgMIgBgFQgJANgZgMQgZgLhFAzIAAgCg");
	this.shape_2.setTransform(-72,70.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,51.4,17.5,37.6);


(lib.head_lq = function(mode,startPosition,loop,reversed) {
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
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ACqAMIhKgbIjAgZIhUgCQgVACgIAIQAzARAiAGQAiAHgCgBIBTALIBuAJQCwA3hrg8g");
	this.shape_4.setTransform(3.4044,-15.7416);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9A6C52").s().p("ABlARIhugJIhTgLIgggGQgigGgzgRQAIgIAVgCIBUACIDAAZIBKAbQA3AfgUAAQgTAAhVgag");
	this.shape_5.setTransform(3.4044,-15.7416);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Hair
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("Ag+hGQgEAKAAAPQAAAQAJAdQgVBPBUgTQAGgBACAAQABAAAEACQACABANAJIAUAAQALgGgJgcIAIACIgGgIIAJACQgOgYgGgcQAGAKAGAAIgWg0AACArQABAGADALAA6AfIgDgCAATA9IgDgG");
	this.shape_6.setTransform(9.769,-7.2,0.8921,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBDBDB").s().p("AAiBHIgPgJIgDgHIADAHIgFgCQgCgBgGACIgEgRIAEARQhUASAVhOQgJgdAAgQQAAgQAEgJQAugFA1ANIAWA0QgGABgGgKQAGAbAOAYIgJgCIAGAJIgIgDQAJAdgLAFgAA6AfIgDgCgAAGA9IAAAAg");
	this.shape_7.setTransform(9.769,-7.2861,0.8921,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Nose
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAiAVQgRAVgngCQgUgWAQgVQAOgUAVgOQACgBACgB");
	this.shape_8.setTransform(-4.9858,-10.3155);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE3D5").s().p("AgYAnQgUgWAPgVQAOgUAWgOIgBAbIAZAXIAGAAIgFAIQgQATghAAIgHAAg");
	this.shape_9.setTransform(-4.7358,-10.2155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// MustacheL
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AA5AAQAGAOgDAWQgGgNgGgDQgHgFgMgNQgNgMgagDQgbgCgXAMQAEgEgCgKQgDgKATgFQATgFAcAFQAeAEAIAHQAHAHAHAOg");
	this.shape_10.setTransform(-3.5,-3.7503);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DBDBDB").s().p("AAwAUQgHgFgMgNQgNgMgagDQgbgCgWAMQADgEgDgKQgCgKATgFQATgFAcAFQAeAEAHAHQAIAHAHAOQAFAOgDAWQgGgNgFgDg");
	this.shape_11.setTransform(-3.5,-3.7503);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Beard
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AgQBjIAFASQASgkAhgVQgKAOAHAMIAqhHQAFAEAGgtQgDgHANgGIAAgQQgDgYAAgKQABgLABgGQAIgIgGgQQgQASgbAJQgNAMAHABQgwAXhSgIQgYAYAKA7QgLAjADAMQgBADgBAIAgQBjIAAgGAhmBAQgDAWAJAtQAogGAegcIADAPIAHgNAhTgBQgCAFgHAE");
	this.shape_12.setTransform(-0.8387,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DBDBDB").s().p("AhmBAIACgJIgCALQAFABgDgMQgDgMALgjQgKg7AYgYQBSAIAwgWQgHgBANgNQAbgJAQgSQAGAQgIAJIgCAQQAAALADAYIAAAPQgNAGADAHQgGAtgFgEIgqBHQgHgMAKgOQghAVgSAkIgFgSIAAgGIAAAGIgHANIgDgPQgeAcgoAFQgJgsADgWgAhcAIQAHgDACgFQgCAFgHADg");
	this.shape_13.setTransform(-0.8387,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// EyeL
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgYADQAegfATAn");
	this.shape_14.setTransform(-0.45,-12.1812);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// EyeR
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AAZADQgdgfgUAn");
	this.shape_15.setTransform(-7.8,-12.1812);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Face
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AAShLQg8AxApBm");
	this.shape_16.setTransform(-8.4241,-10.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE3D5").s().p("Ag5BKIgOgIQgphmA9gxIAigBQADADAQAAQAkAAAZAZQAZAZAAAiQAAAkgZAZQgZAZgkAAQgjAAgYgNg");
	this.shape_17.setTransform(-1.4491,-9.2375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// UnderBrim
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AjSgjQAoAYAoALQAoAKBlAOQBnAPAZAEQAZAFApgFQAMgDgKgNQgWgOgmgJIlDgwQgSAAgQAJg");
	this.shape_18.setTransform(3.3773,-15.4683);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6B4831").s().p("ACLArIiAgTQhlgOgogKQgogLgogYQAQgJASAAIFDAwQAmAJAWAOQAKANgMADQgXACgRAAQgPAAgLgCg");
	this.shape_19.setTransform(3.3773,-15.4683);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-28.1,44.2,43.3);


(lib.hand_lq = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAMgTIgFAlAgHgVIgEAr");
	this.shape.setTransform(0.45,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Thumb
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AASAHIgLASQgZAJABgaIAfgi");
	this.shape_1.setTransform(-4.5255,4.626);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3D5").s().p("AgaAIIAfgiQArAMgnAVIgKASQgGACgFAAQgPAAABgTg");
	this.shape_2.setTransform(-3.6064,4.626);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Hand
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("Agcg4IA6gDIACBrQgeAXgcgXQgIgzAGg1g");
	this.shape_3.setTransform(-0.2056,4.2069);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE3D5").s().p("AgaAwQgIgzAGg1IA6gDIACBrQgPAMgPAAQgNAAgPgMg");
	this.shape_4.setTransform(-0.2056,4.2069);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-2.7,11.3,13.899999999999999);


(lib.foot_lq = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("ABQgNIgrACQg9ATg3AG");
	this.shape.setTransform(-7.925,9.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,2,1).p("AgSAAIAlAA");
	this.shape_1.setTransform(-2.325,8.4125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Ag+BDQg3gnAYgYQAngUAygCIAEgtIBggDQAKAxgKA3");
	this.shape_2.setTransform(-9.5911,4.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8C5233").s().p("AhdAEQAngUAygCIAEgtIBggDQAKAxgKA3IgqADQg9AUg3AGQg3gnAYgYg");
	this.shape_3.setTransform(-9.5911,4.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-3.3,22.2,15.3);


(lib.waist_fr = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAJACIgUAAIAAgDIAUAAQAGABgGACg");
	this.shape.setTransform(-7.475,-7.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6A600").s().p("AgLACIAAgDIAUAAQAGABgGACg");
	this.shape_1.setTransform(-7.475,-7.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// buckle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AgTAGIgBAAIAAAEIAJAAAgTgJIgBAAIAAAFIABAAIAAAKIAAAEIAIAAAgJAGIAVAAIAAgKIgXAAIAAAKAgTgJIAAAFAAVgJIAAAAIAAAFIAAAAIAAAKIAAAAIAAAEIgJAAIgXAAAAVgJIAAAFAAVAGIAAAEIgJAAAgTgJIAoAA");
	this.shape_2.setTransform(-8.05,-7.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A6A600").s().p("AAMAKIgXAAIgIAAIAAgEIAAgKIgBAAIAAgFIABAAIAAAFIAAgFIAnAAIAAAFIAAgFIABAAIAAAFIgBAAIAAAKIAAAEIgIAAIAIAAIAAgEIABAAIAAAEgAgLAGIACAAIAVAAIAAgKIgXAAgAgUAKIAAgEIABAAIAAAEIAIAAg");
	this.shape_3.setTransform(-8.05,-7.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// holes
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("ABUAAQAAABAAABQgBAAgBAAQgBAAAAAAQgBgBAAgBQAAAAABAAQAAgBABAAQABAAABABQAAAAAAAAgABqAAQAAABgBABQgBAAgBAAQgBAAAAAAQgBgBAAgBQAAAAABAAQAAgBABAAQABAAABABQABAAAAAAgAghAAQAAABAAABQgBAAgBAAQgBAAAAAAQgBgBAAgBQAAAAABAAQAAgBABAAQABAAABABQAAAAAAAAgAhlAAQAAABAAABQgBAAgBAAQgBAAAAAAQgBgBAAgBQAAAAABAAQAAgBABAAQABAAABABQAAAAAAAAgAhPAAQAAABgBABQgBAAgBAAQgBAAAAAAQgBgBAAgBQAAAAABAAQAAgBABAAQABAAABABQABAAAAAAgAAsAAQAAABAAABQgBAAgBAAQgBAAAAAAQgBgBAAgBQAAAAABAAQAAgBABAAQABAAABABQAAAAAAAAgAgBAAQAAABAAABQgBAAgBAAQgBAAAAAAQgBgBAAgBQAAAAABAAQAAgBABAAQABAAABABQAAAAAAAAgAALAAQAAABgBABQAAAAgBAAQgBAAgBAAQAAgBAAgBQAAAAAAAAQABgBABAAQABAAAAABQABAAAAAAg");
	this.shape_4.setTransform(-8.275,-7.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABmACIgBgCIABAAIABgBIACABIABAAIgBACIgCAAIgBAAgABRACIgBgCIABAAIABgBIACABIAAAAIAAACIgCAAIgBAAgAApACIgBgCIABAAIABgBIACABIAAAAIAAACIgCAAIgBAAgAAHACIAAgCIAAAAIACgBIABABIABAAIgBACIgBAAIgCAAgAgEACIgBgCIABAAIABgBIACABIAAAAIAAACIgCAAIgBAAgAgkACIgBgCIABAAIABgBIACABIAAAAIAAACIgCAAIgBAAgAhTACIgBgCIABAAIABgBIACABIABAAIgBACIgCAAIgBAAgAhoACIgBgCIABAAIABgBIACABIAAAAIAAACIgCAAIgBAAg");
	this.shape_5.setTransform(-8.275,-7.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// loops
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AhBgLIAGAAIAAAXIgGAAgAA8gLIAGAAIAAAXIgGAAg");
	this.shape_6.setTransform(-7.975,-7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#708DAE").s().p("AhBAMIAAgXIAGAAIAAAXgAA8AMIAAgXIAGAAIAAAXg");
	this.shape_7.setTransform(-7.975,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// belt
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("Ah1gKIDvAAIABAVIj1AAg");
	this.shape_8.setTransform(-8.625,-7.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#453530").s().p("Ah6ALIAFgVIDvAAIABAVg");
	this.shape_9.setTransform(-8.625,-7.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// pockets
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAQg5IgCA7QAAAWgSAHAhRg2QABALAAAKQgCA5giAKABSg2QgBALAAAKQACA5AhAKAgWA6IAogBAgFAaIABhG");
	this.shape_10.setTransform(-8.85,-1.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// waist
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("Ah6BAQgEg0AKhLIDuAFQAFA7gGA5");
	this.shape_11.setTransform(-8.6632,-2.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#708DAE").s().p("Ah0g/IDuAFQAFA7gGA5IjzAGQgEg0AKhLg");
	this.shape_12.setTransform(-8.6632,-2.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-9.6,26.900000000000002,14.899999999999999);


(lib.torso_fr = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AANCaIgBgBIgBgIIAAgCIABgCQAAAAAAAAQABgBAAAAQABAAAAAAQAAABABAAIABABIAAACIAAAAIABAIIAAACIgCABIAAAAIgCgBgAgKCbIgCgBIgBgCQACgPgCgFQgDgFgBgJIgBgSIAAAAQAAgKgCgJQgDgKAEgPIABgCIACAAIACABIAAACQgEAOADAJQACAJAAALIABASQABAHACAFQADAFgCASIgBABIgBABIAAAAgAAMCKIgBgCIgFgVQgCgLABgIIACgTQABgLgCgKIgBgTIAAAAIABgSIACgVQACgLgDgJIABgCIABgCIACABIABABQADALgCAMIgCAUIgBATIABASQACAKgBAMIgCATQgBAHACAKIAFAVIgBACIgBABIgBAAIgBAAgAgSAyIgBgCIAAgUIAAgTIgCgUQgBgJAEgNQAEgLgCgKQgBgLACgKIADgRIAAgBQACgIgCgKQgCgLACgKIAAAAIAEgTIABgCIACgBIACABIAAACIgEAUQgCAJACAKQACALgCAJIAAAAIgDASQgCAJABAKQACALgEANQgEALABAIIACAUIAAAVIAAATIgBACIgCABIgBgBgAAJgdIgBgBIgBgCQADgKgBgKIAAgBQAAgLACgKQACgJgBgJQgBgJABgLIACgWIADgSIACgBIABgBIACACIAAABIgDASIgCAWQgBAKABAJQABAJgCAKQgCAJAAALIAAAAQABAMgDALIgBABIgBAAIgBAAg");
	this.shape.setTransform(0.7695,-15.3283);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Body
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhPiwIC1gBQA1gLgBCDQgNBogRCDIjSgCIgFAAIgYAAQggiOgGiPQABhMBDAIIAEAB");
	this.shape_1.setTransform(0.3886,-17.4481);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7D0000").s().p("AhWCwIgFAAIgYAAQggiOgGiPQABhMBDAIIAEABIACAAIC1gBQA1gLgBCDIgeDrg");
	this.shape_2.setTransform(0.3886,-17.4481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-36.3,32.9,37.699999999999996);


(lib.knee_fr = function(mode,startPosition,loop,reversed) {
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

	// calf
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AA0h3IAKEZAgyChIgLkLQAFgSALgLQALgLAYgJIAMgCQAVgHAHADQAHADANAh");
	this.shape_2.setTransform(1,82.6562);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#708DAE").s().p("AgyChIgLkLQAFgSALgLQALgLAYgJIAMgCQAVgHAHADQAHADANAhIACAGIAKEZg");
	this.shape_3.setTransform(1,82.6562);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,65.4,15.399999999999999,36);


(lib.hip_fr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// thigh
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ag8CyIAHkXQAKgkAJgTQAJgTAcgBQACgBADAAIAAAAQACAAAJACQAJACAFAEQAFAFAVA5AA9hmIgFD8IgBAV");
	this.shape.setTransform(-72.8875,70.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#708DAE").s().p("Ag/CxIgBgBIAHkXQAKgjAJgTQAJgTAdgBIADgBIABAAIALACQAIABAFAFQAFAFAWA5IAFgIIgEANIAHgPIAAgBIACgCIgBADIABABIgJAOIgFD7IgTgJQgagLhEAzIgBgCg");
	this.shape_1.setTransform(-72.425,70.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.9,51.4,14.100000000000009,37.6);


(lib.head_fr = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhhgSQBkAABfANIABAYQg4gFgjgDQghgEgSABQgRABgmgBg");
	this.shape.setTransform(2.15,-19.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1D6D0").s().p("AAIAKQghgDgSABQgRABgmgBIACgaQBjAABeANIABAYIhagJg");
	this.shape_1.setTransform(2.15,-19.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Top
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhdgeQBYgjBoAvIgCBAIjBgWQgEggAHgWg");
	this.shape_2.setTransform(2.2406,-22.1138);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9A6C52").s().p("AhgAYQgEggAHgWQBYgjBoAvIgCBAg");
	this.shape_3.setTransform(2.2406,-22.1138);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Brim
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ACxAHIhKgcIi/gQIhXAMQhKAiA6gJQA4gBATABQASAAAigBICvAQQCtAzhrg7g");
	this.shape_4.setTransform(2.6814,-15.1609);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9A6C52").s().p("ABvAPIivgQQgiABgSAAQgTgBg4ABQg7AJBLgiIBXgMIC/AQIBKAcQA5AfgXAAQgUAAhQgXg");
	this.shape_5.setTransform(2.6814,-15.1609);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Hair
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("ABVg9QgBAJAAAQQAAAPADAeQgHBOAZgTQACgBABAAQABAAABADQAAAAAEAJIAGAAQAEgGgEgcIADACIgCgIIADACQgEgYgCgcQACALACgBIgHg0ABuBGIgBgHABoAzQABAGAAALAhtBGQAAAAgEAJIgGAAQgEgGADgcIgCACIACgIIgDACQAEgYACgcQgCALgCgBIAKhMAhpBEQgBgBgBAAQgBAAgBADIABgHAhnAzQgBAGgBALAhThOQAAAaAAAQQAAAPgDAeQAHBOgagT");
	this.shape_6.setTransform(0.65,-8.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBDBDB").s().p("AByBPIgEgJIgBgHIABAHIgCgCQAAgBgBAAQAAAAAAABQAAAAgBAAQAAAAgBABIgBgRIABARQgZASAGhOQgDgdABgQQAAgQABgJQAOgGAQAOIAGA0QgCABgBgKQABAbAEAYIgCgCIACAIIgDgCQADAdgDAFgAh3BPQgDgFACgdIgCACIACgIIgDACQAEgYACgbQgCAKgCgBIAKhMIAcgBIAAAqQAAAQgDAdQAHBOgagSIACgRIgCARQAAgBAAAAQgBAAAAAAQAAgBAAAAQgBAAAAABIgBACIABgHIgBAHIgFAJg");
	this.shape_7.setTransform(0.65,-8.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Nose
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAbAHQgFAWgfADQgagGANgUQANgTANgS");
	this.shape_8.setTransform(-0.1461,-8.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE3D5").s().p("AgXAGIAaglIAEAHIANAKQAMgBgGAVQgFAXgfADQgagGANgUg");
	this.shape_9.setTransform(-0.0595,-8.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// MustacheL
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAAgNQgDAAgEAAQgbACgNANQgNANgGAEQgGAEgGAMQgCgWAFgNQAHgOAIgHQAHgIAegEQAFAAAFgBQAGAAAHAAQAGAAAJAAQAEABAGAAQAdAEAIAIQAHAHAHAOQAGANgDAWQgGgMgGgEQgGgEgNgNQgDgCgEgDQgJgGgNgCQgFgBgGgBQgEAAgEAAQAKAAAJAC");
	this.shape_10.setTransform(0.6,-3.7379);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DBDBDB").s().p("ABDATQgHgEgNgNIgGgFQgJgGgOgCIgBgBIgPgBIgBAAIgBAAIABAAIABAAIAPABIABABIgKgCIgIAAIgHAAQgaACgNANQgOANgFAEQgHAEgGAMQgDgWAHgNQAGgOAHgHQAIgIAdgEIALgBIANAAIAPAAIAKABQAdAEAIAIQAHAHAHAOQAFANgCAWQgHgMgFgEgAASgLQAOACAJAGgAASgLIAAAAg");
	this.shape_11.setTransform(0.6,-3.7379);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Beard
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AAnhLQgMAAgOgBQgBgBgBgBQgGABgFAAQgEAAgGgBQgBABgBABQAGAAAGgBABfBCQAJgIgHgpIAMABQAFAFgIg0QgDgHANgGIAAgQQgEgYABgKQAAgLADgPQgIABgEgCQgEgCAAgFIgCAYQgSASgoAIAAgBtQABgEACgBQACgGAKgJAAgBtIACAAIAWAFQAOgaAWgTAAgBtQgBAJgCAJQgPgCgOgFQgNgFgMgIQgEgDgDgDQgEgDgEgEAheBCQgKgJAIgoIgMABQgFAFAJg0QACgHgMgGIAAgQQADgYgBgKQAAgLgDgPQAHABAFgCQAEgCAAgFIACAYQASASAoAIAgmhLQAMAAAOgBAgfBtIgCAAIgWAFQgOgagWgTAggBlQAAAEABAEAgZBrIgGAC");
	this.shape_12.setTransform(0.35,1.4125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DBDBDB").s().p("AAAB4QgNgFgMgIIgHgGIgIgHIAHAPIgWAFQgOgagWgTIgEg0IgNABQgFAFAJg0QADgHgNgGIAAgQQADgYAAgKQgBgLgDgPQAIABAEgCQAEgCAAgFIACAYQASASAoAIIABABIAagBIACgCIAKABIALgBIACACIAaABIABgBQAogIASgSIACgYQAAAFAEACQAEACAIgBQgDAPAAALQgBAKADAYIAAAQQgNAGADAHQAJA0gFgFIgNgBIgEA0QgWATgOAaIgWgFIANgUQgKAJgCAGQgCABgBAEIgDASQgPgCgOgFgAgMhMIAMgBIgMABgAggBlIAHAGIgGACIgBgIgAggBlIAAAAg");
	this.shape_13.setTransform(0.35,1.4125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// EyeL
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgYADQAdgfAUAn");
	this.shape_14.setTransform(4.95,-11.9812);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// EyeR
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AAYAGQgagdgVAf");
	this.shape_15.setTransform(-3.7,-12.795);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Face
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AAShLQg8AxApBm");
	this.shape_16.setTransform(-8.4241,-10.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE3D5").s().p("AhBBVIgPgIQgvh3BFg5IAmAAQAEADATAAQAoAAAcAdQAdAcAAAoQAAApgdAdQgcAdgoAAQgoAAgcgPg");
	this.shape_17.setTransform(0.9519,-7.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// UnderBrim
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AjYgGQApAPAugFQAugEBnAOQBpAPAaAFQAaAEAYgFQAYgEgLgJQgVgSgmgJIk7gcQgwAJgIAUg");
	this.shape_18.setTransform(2.5723,-14.2987);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6B4831").s().p("ACXAiQgagFhpgPQhngOguAEQguAFgpgPQAIgUAwgJIE7AcQAmAJAVASQALAJgYAEQgMADgNAAQgNAAgMgCg");
	this.shape_19.setTransform(2.5723,-14.2987);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-27.7,45.6,42.9);


(lib.hand_fr = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAMgTIgFAlAgHgVIgEAr");
	this.shape.setTransform(0.45,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Thumb
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AASAHIgLASQgZAJABgaIAfgi");
	this.shape_1.setTransform(-4.5255,4.626);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3D5").s().p("AgaAIIAfgiQArAMgnAVIgKASQgGACgFAAQgPAAABgTg");
	this.shape_2.setTransform(-3.6064,4.626);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Hand
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("Agcg4IA6gDIACBrQgeAXgcgXQgIgzAGg1g");
	this.shape_3.setTransform(-0.2056,4.2069);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE3D5").s().p("AgaAwQgIgzAGg1IA6gDIACBrQgPAMgPAAQgNAAgPgMg");
	this.shape_4.setTransform(-0.2056,4.2069);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-2.7,11.3,13.899999999999999);


(lib.foot_fr = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("AgCgOIAFAd");
	this.shape.setTransform(-9.325,9.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhLgTIAAg2IBfgDQAGAdACAkAhFA1QAFAVBbADQASgBAMgDQAkgJgagkQgFgFgFgFQgVgUgGgEAhLgNIgCAg");
	this.shape_1.setTransform(-1.9548,5.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C5233").s().p("AhFA1IgGgeIgBgEIACggIgCgGQgEgGAGAGIAAg2IBfgDQAFAdADAkIgFACIAHADQAGAEAVAUIAKAKQAaAkgkAJQgMADgTABQhagDgGgVg");
	this.shape_2.setTransform(-2.0194,5.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-3.3,17.700000000000003,17.3);


(lib.waist = function(mode,startPosition,loop,reversed) {
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
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAKgJIAAAAIAAAFIAAAAIAAAKIAAAEIgFAAIgMAAIgBgEIANAAIAAgKIgNAAIgBgFIATAAIAAAFAAKAGIAAAAIAAAEIgFAA");
	this.shape_2.setTransform(-16.35,-7.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A6A600").s().p("AAFAKIAFAAIAAgEIAAAEIgFAAIgMAAIgBgEIANAAIAAgKIgNAAIgBgFIATAAIAAAFIAAgFIAAAAIAAAFIAAAAIAAAKIAAAAIAAAEg");
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


(lib.torso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Buttons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABCcIgBgBQgEgTABgGQACgGgDgKIAAAAIgDgTIAAAAIgBgTIAAAAIgCgVQgBgKABgIIACgXIABgCIACAAIACABIAAACIgCAWIAAARIACAWIABATIAAAAIACASQADALgCAHQgBAGAFAQIAAACIgCABIgBABIgBgBgAgGAJIgBgCQgEgIAEgNIAAAAQAEgLgCgHQgCgHAAgMIABgVIADgVIADgWIAAAAQACgKAAgKQAAgKAFgJIABgBIACAAIABABIAAACQgEAIAAAKQAAAKgCAKIgEAWIgCAVIgBAUQAAALACAHQACAIgEANIAAAAQgEALADAGIAAACIgBACIgBAAIgBAAg");
	this.shape.setTransform(-7.5864,-15.3928);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Collar
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhSADICZgqQARAhgIAMIiQAig");
	this.shape_1.setTransform(1.1133,-32.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7D0000").s().p("AhSADICZgqQARAhgIAMIiQAig");
	this.shape_2.setTransform(1.1133,-32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Body
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhNiaICmgKQAPCrgJCeIi4gBQgWihAiidg");
	this.shape_3.setTransform(0.4756,-16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D0000").s().p("AhZCkQgWihAiidICmgKQAPCrgJCeg");
	this.shape_4.setTransform(0.4756,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-37.7,21.700000000000003,38.7);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAlhrIgJDYAgkhsIAFDY");
	this.shape.setTransform(-42.875,24.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D0000").s().p("AgfCIIgFjYIgBgFQAAgVAOgPQANgPASAAIAAgBIAAABQATAAACAEIAGAVQAEARgDAQIgIDYg");
	this.shape_1.setTransform(-42.8448,21.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,7.8,9.299999999999997,28.599999999999998);


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


(lib.knee = function(mode,startPosition,loop,reversed) {
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
	this.shape_2.graphics.f("#000000").s().p("AgCB3QAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgVgBgFQgDgGAAgJQgBgJACgLIABgSQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgBATQgCALABAHQAAAIACAEQACAGAAAYQAAAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAgAgCAdQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQgEgLAEgMQAEgIgBgLQAAgMgCgIIAAAAIgDgRIAAAAIAAgXQABgNgBgIIAAgBQAAgJABgIQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAgBQAAAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAHAAAIIAAAAQABAJgBAOIAAAVIADAQIAAAAQACAIAAANQABAOgEAKQgDAIACAIQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgBABIgCgBg");
	this.shape_2.setTransform(1.9212,85.8975);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// calf
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("Ag4CfIgLkLQAFgSALgLQALgMAYgJIANgBQAgAAARAIQARAJAFATABEh7IgMEb");
	this.shape_3.setTransform(1.6,82.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#708DAE").s().p("Ag4CfIgLkLQAFgSALgLQALgMAYgJIANgBQAgAAARAJQARAIAFATIAAAAIgMEbg");
	this.shape_4.setTransform(1.6,82.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,65.9,15.600000000000001,35.5);


(lib.hip = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgDCJQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIgBgUIAAgBQgBgHACgIIAAgBQABgIAAgMIAAgUIAAgSQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAASIAAAUQAAAOgBAIIAAAAIgBANIAAABIABAVQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAAAAgQAAgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgVQgBgMACgJIAAAAQACgIgCgKQgCgLACgKIABgSQAAgIgBgKIAAAAQgBgKABgMIgBgTQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAABABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABQABAKAAALIAAAUQACALgBAJIgBASQgBAIABALQACANgDAJQgBAHABAKQABAMgBALQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgDACIAAAAg");
	this.shape.setTransform(-72.0023,73.1478);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// thigh
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhFCyIgIkWQAAggAXgWQAUgVAegBQACgBACAAIAAAAQACAAABABQAeABAWAVQAXAWAAAgIAAABQAAAEgBACIgMDt");
	this.shape_1.setTransform(-72,70.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#708DAE").s().p("AhDCxIgBgBIgIkWQAAgfAWgXQAVgUAdgBIAEgBIAAAAIAEABQAdABAWAUQAWAXAAAgIAAABIAAAGIgMDtQgBAMgCgMIgBgFQgJANgZgMQgZgLhFAzIAAgCg");
	this.shape_2.setTransform(-72,70.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,51.4,17.5,37.6);


(lib.head = function(mode,startPosition,loop,reversed) {
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


(lib.hand = function(mode,startPosition,loop,reversed) {
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
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("Agdg4IA6gDIABBrQgdAXgcgXg");
	this.shape_3.setTransform(-0.075,4.2069);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE3D5").s().p("AgbAwIgChoIA6gDIABBrQgOAMgPAAQgOAAgOgMg");
	this.shape_4.setTransform(-0.075,4.2069);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-2.7,11.3,13.899999999999999);


(lib.foot = function(mode,startPosition,loop,reversed) {
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
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAIhtQACAKARAfIAGCtQABALgEAFQgDAFgDADQgFACgGABQgHABgIgBQgJgDgCgBQgCgCgDgFQgEgFgEgLIgGiwQgBgYAFgHQAEgFADgLQADgLAHgCQAHgCAEAHQAGAGACALg");
	this.shape_2.setTransform(22.3194,39.4918);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D0000").s().p("AgCCEIgLgEIgFgHQgEgFgEgLIgGiwQgBgYAFgHQAEgFADgLQADgLAHgCQAHgCAEAHQAGAGACALQACAKARAfIAGCtQABALgEAFQgDAFgDADIgLADIgIAAIgHAAg");
	this.shape_3.setTransform(22.3194,39.4918);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,25.3,10.099999999999998,28.999999999999996);


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
	this.instance.setTransform(-510.55,8.2);

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
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(112.85,58.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_13();
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
	this.instance_2 = new lib.CachedBmp_16();
	this.instance_2.setTransform(501.65,30.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_15();
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
	this.instance_5 = new lib.CachedBmp_17();
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


(lib.MinerTurningLQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// LeftShoulder
	this.instance = new lib.shoulder("synched",0);
	this.instance.setTransform(22.55,43.3,0.9999,0.9999,0.9548,0,0,-42.1,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// LeftElbow
	this.instance_1 = new lib.elbow("synched",0);
	this.instance_1.setTransform(22.05,63.5,0.9998,0.9998,12.1464,0,0,22.6,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// LeftWrist
	this.instance_2 = new lib.hand_lq("synched",0);
	this.instance_2.setTransform(18.05,83.15,0.9999,0.9999,10.9807,0,0,0.1,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Head
	this.instance_3 = new lib.head_lq("synched",0);
	this.instance_3.setTransform(21.95,20.6,1,1,0,0,0,4.2,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Torso
	this.instance_4 = new lib.torso_lq("synched",0);
	this.instance_4.setTransform(18.3,62.75,1,1,0,0,0,0.5,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Neck
	this.instance_5 = new lib.neck("synched",0);
	this.instance_5.setTransform(22.65,32.7,1,1,0,0,0,0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Waist
	this.instance_6 = new lib.waist_lq("synched",0);
	this.instance_6.setTransform(18.6,66.65,1,1,0,0,0,-8,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// LeftHip
	this.instance_7 = new lib.hip_lq("synched",0);
	this.instance_7.setTransform(17.75,75.15,0.9999,0.9999,-4.2287,0,0,-73.2,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// LeftKnee
	this.instance_8 = new lib.knee_lq("synched",0);
	this.instance_8.setTransform(20.9,102.9,0.9999,0.9999,-17.6294,0,0,1.7,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// LeftAnkle
	this.instance_9 = new lib.foot_lq("synched",0);
	this.instance_9.setTransform(28.85,127.35,1,1,-17.5895,0,0,-4.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// RightHip
	this.instance_10 = new lib.hip_lq("synched",0);
	this.instance_10.setTransform(17.8,75.15,0.9999,0.9999,-1.2775,0,0,-73.2,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// RightKnee
	this.instance_11 = new lib.knee_lq("synched",0);
	this.instance_11.setTransform(19.5,103,0.9999,0.9999,-0.9549,0,0,1.7,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// RightAnkle
	this.instance_12 = new lib.foot_lq("synched",0);
	this.instance_12.setTransform(20.15,128.55,1,1,-0.9137,0,0,-4.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// RightShoulder
	this.instance_13 = new lib.shoulder("synched",0);
	this.instance_13.setTransform(14.7,43.35,0.9999,0.9999,-0.0752,0,0,-42.1,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// RightElbow
	this.instance_14 = new lib.elbow("synched",0);
	this.instance_14.setTransform(14.5,63.35,0.9998,0.9998,0.4057,0,0,22.6,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// RightWrist
	this.instance_15 = new lib.hand_lq("synched",0);
	this.instance_15.setTransform(14.5,83.4,0.9999,0.9999,-0.7598,0,0,-0.1,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MinerTurningLQ, new cjs.Rectangle(-1,-1,44.3,143.4), null);


(lib.MinerTurningFR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// LeftShoulder
	this.instance = new lib.shoulder("synched",0);
	this.instance.setTransform(32.35,43,0.9999,0.9999,-11.278,0,0,-42.1,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// LeftElbow
	this.instance_1 = new lib.elbow("synched",0);
	this.instance_1.setTransform(36.05,62.65,0.9998,0.9998,-0.3332,0,0,22.5,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// LeftWrist
	this.instance_2 = new lib.hand_fr("synched",0);
	this.instance_2.setTransform(36.5,82.6,0.9999,0.9999,-1.4988,0,0,0.1,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// RightShoulder
	this.instance_3 = new lib.shoulder("synched",0);
	this.instance_3.setTransform(8.65,42.95,1,1,3.3768,0,0,-42.1,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// RightElbow
	this.instance_4 = new lib.elbow("synched",0);
	this.instance_4.setTransform(7.15,62.85,0.9998,0.9998,-5.8058,0,0,22.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// RightWrist
	this.instance_5 = new lib.hand_fr("synched",0);
	this.instance_5.setTransform(9.4,82.8,0.9999,0.9999,0,-1.9353,178.0647,-0.1,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Head
	this.instance_6 = new lib.head_fr("synched",0);
	this.instance_6.setTransform(23.35,20.25,1,1,0,0,0,4.2,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Torso
	this.instance_7 = new lib.torso_fr("synched",0);
	this.instance_7.setTransform(19.7,62.4,1,1,0,0,0,0.5,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Neck
	this.instance_8 = new lib.neck("synched",0);
	this.instance_8.setTransform(24.05,32.35,1,1,0,0,0,0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Waist
	this.instance_9 = new lib.waist_fr("synched",0);
	this.instance_9.setTransform(20,66.3,1,1,0,0,0,-8,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// LeftHip
	this.instance_10 = new lib.hip_fr("synched",0);
	this.instance_10.setTransform(25,74.8,0.9999,0.9999,-1.2775,0,0,-73.2,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// LeftKnee
	this.instance_11 = new lib.knee_fr("synched",0);
	this.instance_11.setTransform(26.85,102.7,0.9998,0.9998,0.0079,0,0,1.7,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// LeftAnkle
	this.instance_12 = new lib.foot_fr("synched",0);
	this.instance_12.setTransform(27.15,128.3,1,1,0.0481,0,0,-4.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// RightHip
	this.instance_13 = new lib.hip_fr("synched",0);
	this.instance_13.setTransform(12,74.8,0.9999,0.9999,-1.2775,0,0,-73.2,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// RightKnee
	this.instance_14 = new lib.knee_fr("synched",0);
	this.instance_14.setTransform(13.7,102.65,0.9999,0.9999,-0.9549,0,0,1.7,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// RightAnkle
	this.instance_15 = new lib.foot_fr("synched",0);
	this.instance_15.setTransform(14.45,128.2,1,1,0,0.9137,-179.0863,-4.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MinerTurningFR, new cjs.Rectangle(-1,-1,45.6,143.5), null);


(lib.miner_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {faceLeft:0,walkLeft:1,faceRight:31,walkRight:32,turnRight:62,turnLeft:79};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		dir = 'left';
	}
	this.frame_30 = function() {
		this.gotoAndPlay('walkLeft');
	}
	this.frame_31 = function() {
		this.stop();
		this.dir = 'right';
	}
	this.frame_61 = function() {
		this.gotoAndPlay('walkRight');
	}
	this.frame_78 = function() {
		this.stop();
	}
	this.frame_95 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(1).call(this.frame_31).wait(30).call(this.frame_61).wait(17).call(this.frame_78).wait(17).call(this.frame_95).wait(1));

	// Turn
	this.instance = new lib.MinerTurningLQ();
	this.instance.setTransform(20.35,70.2,1,1,0,0,0,21.1,70.8);

	this.instance_1 = new lib.MinerTurningFR();
	this.instance_1.setTransform(21.15,69.6,1,1,0,0,0,21.8,70.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{skewY:0,x:20.35,y:70.2}}]},63).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance,p:{skewY:180,x:20.4,y:69.8}}]},5).to({state:[]},5).to({state:[{t:this.instance,p:{skewY:180,x:20.35,y:70.2}}]},2).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance,p:{skewY:0,x:20.4,y:69.8}}]},5).to({state:[]},5).wait(1));

	// LeftShoulder
	this.instance_2 = new lib.shoulder("synched",0);
	this.instance_2.setTransform(17.3,43.35,0.9999,0.9999,-0.0752,0,0,-42.1,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:14.1,rotation:-30.5503,x:17.5,y:43.45},0).to({rotation:4.4049,x:18.15,y:44.25},8).to({rotation:23.1212,x:17.35,y:43.5},7).to({regX:-42,rotation:2.6249,x:16.45,y:45.1},8).to({regX:-42.1,rotation:-30.5503,x:17.5,y:43.45},6).wait(1).to({regY:14.2,rotation:0,skewX:0.0752,skewY:-179.9248,x:24.9,y:43.35},0).wait(1).to({regY:14.1,skewX:30.5503,skewY:-149.4497,x:26.15,y:43.45},0).to({skewX:-4.4049,skewY:-184.4049,x:26,y:44.25},8).to({skewX:-23.1212,skewY:-203.1212,x:25,y:43.5},7).to({regX:-42,skewX:-2.6249,skewY:-182.6249,x:26.35,y:45.1},8).to({regX:-42.1,skewX:30.5503,skewY:-149.4497,x:26.15,y:43.45},6).wait(1).to({regY:14.2,rotation:-0.0752,skewX:0,skewY:0,x:17.3,y:43.35},0).to({_off:true},1).wait(15).to({_off:false,rotation:0,skewX:0.0752,skewY:-179.9248,x:24.9},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,rotation:-0.0752,skewX:0,skewY:0,x:17.3},0).wait(1));

	// LeftElbow
	this.instance_3 = new lib.elbow("synched",0);
	this.instance_3.setTransform(17.1,63.35,0.9998,0.9998,0.4057,0,0,22.6,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:22.5,regY:31.4,rotation:-24.3437,x:27.4,y:60.75},0).to({rotation:10.6118,x:16.35,y:64.1},8).to({regX:22.4,rotation:55.2725,x:9.25,y:61.75},7).to({regY:31.3,scaleX:0.9997,scaleY:0.9997,rotation:18.0318,x:15.2,y:64.9},8).to({regX:22.5,regY:31.4,scaleX:0.9998,scaleY:0.9998,rotation:-24.3437,x:27.4,y:60.75},6).wait(1).to({regX:22.6,regY:31.6,rotation:0,skewX:-0.4057,skewY:179.5943,x:25.1,y:63.35},0).wait(1).to({regX:22.5,regY:31.4,skewX:24.3437,skewY:204.344,x:16.25,y:60.75},0).to({skewX:-10.6118,skewY:169.3881,x:27.8,y:64.1},8).to({regX:22.4,skewX:-55.2725,skewY:124.7267,x:33.1,y:61.75},7).to({regY:31.3,scaleX:0.9997,scaleY:0.9997,skewX:-18.0318,skewY:161.968,x:27.6,y:64.9},8).to({regX:22.5,regY:31.4,scaleX:0.9998,scaleY:0.9998,skewX:24.3437,skewY:204.344,x:16.25,y:60.75},6).wait(1).to({regX:22.6,regY:31.6,rotation:0.4057,skewX:0,skewY:360,x:17.1,y:63.35},0).to({_off:true},1).wait(15).to({_off:false,rotation:0,skewX:-0.4057,skewY:539.5943,x:25.1},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,rotation:0.4057,skewX:0,skewY:360,x:17.1},0).wait(1));

	// LeftWrist
	this.instance_4 = new lib.hand("synched",0);
	this.instance_4.setTransform(17.1,83.4,0.9999,0.9999,-0.7598,0,0,-0.1,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0,regY:-1.5,rotation:-25.5085,x:36,y:79},0).to({regX:-0.1,regY:-1.4,rotation:9.4465,x:12.9,y:84.05},8).to({regX:0,rotation:54.1079,x:-7.05,y:73.55},7).to({regX:-0.1,scaleX:0.9998,scaleY:0.9998,rotation:16.8669,x:9.2,y:84.1},8).to({regX:0,regY:-1.5,scaleX:0.9999,scaleY:0.9999,rotation:-25.5085,x:36,y:79},6).wait(1).to({regX:-0.1,regY:-1.6,rotation:0,skewX:0.7598,skewY:-179.2402,x:25.1,y:83.4},0).wait(1).to({regX:0,regY:-1.5,skewX:25.5085,skewY:-154.4915,x:7.65,y:79},0).to({regX:-0.1,regY:-1.4,skewX:-9.4465,skewY:-189.4465,x:31.25,y:84.05},8).to({regX:0,skewX:-54.1079,skewY:-234.1079,x:49.4,y:73.55},7).to({regX:-0.1,scaleX:0.9998,scaleY:0.9998,skewX:-16.8669,skewY:-196.8669,x:33.6,y:84.1},8).to({regX:0,regY:-1.5,scaleX:0.9999,scaleY:0.9999,skewX:25.5085,skewY:-154.4915,x:7.65,y:79},6).wait(1).to({regX:-0.1,regY:-1.6,rotation:-0.7598,skewX:0,skewY:0,x:17.1,y:83.4},0).to({_off:true},1).wait(15).to({_off:false,rotation:0,skewX:0.7598,skewY:-179.2402,x:25.1},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,rotation:-0.7598,skewX:0,skewY:0,x:17.1},0).wait(1));

	// Head
	this.instance_5 = new lib.head("synched",0);
	this.instance_5.setTransform(21.95,20.6,1,1,0,0,0,4.2,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:22.2},0).to({regY:-6.6,rotation:-2.4714,x:22.95,y:21.3},8).to({regY:-6.5,rotation:0,x:22.05,y:20.6},7).to({rotation:3.6911,x:21.2,y:21.95},8).to({rotation:0,x:22.2,y:20.6},6).wait(1).to({skewY:180,x:20.25},0).wait(1).to({x:21.45},0).to({regY:-6.6,skewX:2.4714,skewY:182.4714,x:21.2,y:21.3},8).to({regY:-6.5,skewX:0,skewY:180,x:20.3,y:20.6},7).to({skewX:-3.6911,skewY:176.3089,x:21.6,y:21.95},8).to({skewX:0,skewY:180,x:21.45,y:20.6},6).wait(1).to({skewY:0,x:21.95},0).to({_off:true},1).wait(15).to({_off:false,skewY:180,x:20.25},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,skewY:0,x:21.95},0).wait(1));

	// Torso
	this.instance_6 = new lib.torso("synched",0);
	this.instance_6.setTransform(18.3,62.75,1,1,0,0,0,0.5,-3.1);

	this.ikNode_2 = new lib.torso("synched",0);
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(18.55,62.75,1,1,0,0,0,0.5,-3.1);
	this.ikNode_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_2}]},8).to({state:[{t:this.ikNode_2}]},7).to({state:[{t:this.ikNode_2}]},8).to({state:[{t:this.ikNode_2}]},6).to({state:[{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_2}]},8).to({state:[{t:this.ikNode_2}]},7).to({state:[{t:this.ikNode_2}]},8).to({state:[{t:this.ikNode_2}]},6).to({state:[{t:this.ikNode_2}]},1).to({state:[]},1).to({state:[{t:this.ikNode_2}]},15).to({state:[{t:this.ikNode_2}]},1).to({state:[]},1).to({state:[{t:this.ikNode_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.ikNode_2).wait(1).to({_off:false},0).to({x:19.25,y:63.55},8).to({x:18.4,y:62.75},7).to({x:17.5,y:64.15},8).to({x:18.55,y:62.75},6).wait(1).to({skewY:180,x:23.9},0).wait(1).to({x:25.1},0).to({x:24.9,y:63.55},8).to({x:23.95,y:62.75},7).to({x:25.3,y:64.15},8).to({x:25.1,y:62.75},6).wait(1).to({skewY:0,x:18.3},0).to({_off:true},1).wait(15).to({_off:false,skewY:180,x:23.9},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,skewY:0,x:18.3},0).wait(1));

	// Neck
	this.instance_7 = new lib.neck("synched",0);
	this.instance_7.setTransform(22.65,32.7,1,1,0,0,0,0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:22.9},0).to({x:23.6,y:33.5},8).to({x:22.75,y:32.7},7).to({x:21.85,y:34.1},8).to({x:22.9,y:32.7},6).wait(1).to({skewY:180,x:19.55},0).wait(1).to({x:20.75},0).to({x:20.55,y:33.5},8).to({x:19.6,y:32.7},7).to({x:20.95,y:34.1},8).to({x:20.75,y:32.7},6).wait(1).to({skewY:0,x:22.65},0).to({_off:true},1).wait(15).to({_off:false,skewY:180,x:19.55},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,skewY:0,x:22.65},0).wait(1));

	// Waist
	this.instance_8 = new lib.waist("synched",0);
	this.instance_8.setTransform(18.6,66.65,1,1,0,0,0,-8,-7.5);

	this.ikNode_1 = new lib.waist("synched",0);
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(18.85,66.65,1,1,0,0,0,-8,-7.5);
	this.ikNode_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_1}]},8).to({state:[{t:this.ikNode_1}]},7).to({state:[{t:this.ikNode_1}]},8).to({state:[{t:this.ikNode_1}]},6).to({state:[{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_1}]},1).to({state:[{t:this.ikNode_1}]},8).to({state:[{t:this.ikNode_1}]},7).to({state:[{t:this.ikNode_1}]},8).to({state:[{t:this.ikNode_1}]},6).to({state:[{t:this.ikNode_1}]},1).to({state:[]},1).to({state:[{t:this.ikNode_1}]},15).to({state:[{t:this.ikNode_1}]},1).to({state:[]},1).to({state:[{t:this.ikNode_1}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.ikNode_1).wait(1).to({_off:false},0).to({x:19.55,y:67.45},8).to({x:18.7,y:66.65},7).to({x:17.8,y:68.05},8).to({x:18.85,y:66.65},6).wait(1).to({skewY:180,x:23.6},0).wait(1).to({x:24.8},0).to({x:24.6,y:67.45},8).to({x:23.65,y:66.65},7).to({x:25,y:68.05},8).to({x:24.8,y:66.65},6).wait(1).to({skewY:0,x:18.6},0).to({_off:true},1).wait(15).to({_off:false,skewY:180,x:23.6},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,skewY:0,x:18.6},0).wait(1));

	// LeftHip
	this.instance_9 = new lib.hip("synched",0);
	this.instance_9.setTransform(17.8,75.15,0.9999,0.9999,-1.2775,0,0,-73.2,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:59.7,rotation:25.9167,x:18.05,y:75.1},0).to({rotation:2.941,x:18.75,y:75.95},8).to({regX:-73.1,regY:59.6,rotation:-3.7766,x:17.9,y:75.15},7).to({scaleX:0.9998,scaleY:0.9998,rotation:34.2057,x:16.9,y:76.5},8).to({regX:-73.2,regY:59.7,scaleX:0.9999,scaleY:0.9999,rotation:25.9167,x:18.05,y:75.1},6).wait(1).to({regY:59.8,rotation:0,skewX:1.2775,skewY:-178.7225,x:24.4,y:75.15},0).wait(1).to({regY:59.7,skewX:-25.9167,skewY:-205.9167,x:25.6,y:75.1},0).to({scaleX:0.9998,skewX:-2.941,skewY:-182.941,x:25.4,y:75.95},8).to({regX:-73.1,regY:59.6,scaleX:0.9999,skewX:3.7766,skewY:-176.2234,x:24.45,y:75.15},7).to({scaleX:0.9998,scaleY:0.9998,skewX:-34.2057,skewY:-214.2057,x:25.9,y:76.5},8).to({regX:-73.2,regY:59.7,scaleX:0.9999,scaleY:0.9999,skewX:-25.9167,skewY:-205.9167,x:25.6,y:75.1},6).wait(1).to({regY:59.8,rotation:-1.2775,skewX:0,skewY:-360,x:17.8,y:75.15},0).to({_off:true},1).wait(15).to({_off:false,rotation:0,skewX:1.2775,skewY:-538.7225,x:24.4},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,rotation:-1.2775,skewX:0,skewY:-360,x:17.8},0).wait(1));

	// LeftKnee
	this.instance_10 = new lib.knee("synched",0);
	this.instance_10.setTransform(19.5,103,0.9999,0.9999,-0.9549,0,0,1.7,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regY:73.4,rotation:22.2486,x:6.75,y:100.8},0).to({rotation:-0.7266,x:18.45,y:104.05},8).to({regX:1.6,regY:73.3,scaleX:0.9998,scaleY:0.9998,rotation:-17.3943,x:20.85,y:103.15},7).to({regY:73.2,rotation:-37.6046,x:1.7,y:100},8).to({regX:1.7,regY:73.4,scaleX:0.9999,scaleY:0.9999,rotation:22.2486,x:6.75,y:100.8},6).wait(1).to({regY:73.5,rotation:0,skewX:0.9549,skewY:-179.0451,x:22.7,y:103},0).wait(1).to({regY:73.4,skewX:-22.2486,skewY:-202.2486,x:36.9,y:100.8},0).to({scaleX:0.9998,skewX:0.7266,skewY:-179.2733,x:25.7,y:104.05},8).to({regX:1.6,regY:73.3,scaleY:0.9998,skewX:17.3943,skewY:-162.6057,x:21.5,y:103.15},7).to({regY:73.2,skewX:37.6046,skewY:-142.3948,x:41.1,y:100},8).to({regX:1.7,regY:73.4,scaleX:0.9999,scaleY:0.9999,skewX:-22.2486,skewY:-202.2486,x:36.9,y:100.8},6).wait(1).to({regY:73.5,rotation:-0.9549,skewX:0,skewY:-360,x:19.5,y:103},0).to({_off:true},1).wait(15).to({_off:false,rotation:0,skewX:0.9549,skewY:-539.0451,x:22.7},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,rotation:-0.9549,skewX:0,skewY:-360,x:19.5},0).wait(1));

	// LeftAnkle
	this.instance_11 = new lib.foot("synched",0);
	this.instance_11.setTransform(20.15,128.55,1,1,-0.9137,0,0,-4.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:22.2885,x:-2.6,y:124.6},0).to({rotation:-0.6864,x:19,y:129.55},8).to({regX:-4.2,regY:0.1,rotation:-7.1226,x:28.9,y:127.5},7).to({scaleX:0.9998,scaleY:0.9998,rotation:-51.2965,x:17.7,y:120.05},8).to({regX:-4.4,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:22.2885,x:-2.6,y:124.6},6).wait(1).to({regY:-0.3,scaleX:1,scaleY:1,rotation:0,skewX:0.9137,skewY:-179.0863,x:22.05,y:128.55},0).wait(1).to({regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:-22.2885,skewY:-202.2885,x:46.25,y:124.6},0).to({skewX:0.6864,skewY:-179.3136,x:25.15,y:129.55},8).to({regX:-4.2,regY:0.1,skewX:7.1226,skewY:-172.8774,x:13.45,y:127.5},7).to({scaleX:0.9998,scaleY:0.9998,skewX:51.2965,skewY:-128.7035,x:25.1,y:120.05},8).to({regX:-4.4,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:-22.2885,skewY:-202.2885,x:46.25,y:124.6},6).wait(1).to({regY:-0.3,scaleX:1,scaleY:1,rotation:-0.9137,skewX:0,skewY:-360,x:20.15,y:128.55},0).to({_off:true},1).wait(15).to({_off:false,rotation:0,skewX:0.9137,skewY:-539.0863,x:22.05},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,rotation:-0.9137,skewX:0,skewY:-360,x:20.15},0).wait(1));

	// RightHip
	this.instance_12 = new lib.hip("synched",0);
	this.instance_12.setTransform(17.8,75.15,0.9999,0.9999,-1.2775,0,0,-73.2,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:-73,regY:59.7,rotation:-0.4372,x:18.15},0).to({regY:59.6,rotation:46.5799,x:18.9,y:75.95},8).to({rotation:39.5913,x:18,y:75.15},7).to({rotation:1.8978,x:17.3,y:76.85},8).to({regY:59.7,rotation:-0.4372,x:18.15,y:75.15},6).wait(1).to({regX:-73.2,regY:59.8,rotation:0,skewX:1.2775,skewY:-178.7225,x:24.4},0).wait(1).to({regX:-73,regY:59.7,skewX:0.4372,skewY:-179.5628,x:25.5},0).to({regY:59.6,skewX:-46.5799,skewY:-226.5799,x:25.25,y:75.95},8).to({skewX:-39.5913,skewY:-219.5913,x:24.35,y:75.15},7).to({skewX:-1.8978,skewY:-181.8978,x:25.5,y:76.85},8).to({regY:59.7,skewX:0.4372,skewY:-179.5628,y:75.15},6).wait(1).to({regX:-73.2,regY:59.8,rotation:-1.2775,skewX:0,skewY:0,x:17.8},0).to({_off:true},1).wait(15).to({_off:false,rotation:0,skewX:1.2775,skewY:-178.7225,x:24.4},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,rotation:-1.2775,skewX:0,skewY:0,x:17.8},0).wait(1));

	// RightKnee
	this.instance_13 = new lib.knee("synched",0);
	this.instance_13.setTransform(19.5,103,0.9999,0.9999,-0.9549,0,0,1.7,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:1.8,rotation:-17.5642,y:103.25},0).to({regX:1.7,regY:73.4,scaleX:0.9998,scaleY:0.9998,rotation:-48.2671,x:-0.55,y:94.85},8).to({regX:1.8,regY:73.2,rotation:19.9491,x:1.95,y:96.1},7).to({rotation:2.2182,x:17.5,y:103.4},8).to({regY:73.5,scaleX:0.9999,scaleY:0.9999,rotation:-17.5642,x:19.5,y:103.25},6).wait(1).to({regX:1.7,rotation:0,skewX:0.9549,skewY:-179.0451,x:22.7,y:103},0).wait(1).to({regX:1.8,skewX:17.5642,skewY:-162.4358,x:24.15,y:103.25},0).to({regX:1.7,regY:73.4,scaleX:0.9998,scaleY:0.9998,skewX:48.2671,skewY:-131.7329,x:44.7,y:94.85},8).to({regX:1.8,regY:73.2,skewX:-19.9491,skewY:-199.9491,x:40.4,y:96.1},7).to({skewX:-2.2182,skewY:-182.2182,x:25.3,y:103.4},8).to({regY:73.5,scaleX:0.9999,scaleY:0.9999,skewX:17.5642,skewY:-162.4358,x:24.15,y:103.25},6).wait(1).to({regX:1.7,rotation:-0.9549,skewX:0,skewY:0,x:19.5,y:103},0).to({_off:true},1).wait(15).to({_off:false,rotation:0,skewX:0.9549,skewY:-179.0451,x:22.7},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,rotation:-0.9549,skewX:0,skewY:0,x:19.5},0).wait(1));

	// RightAnkle
	this.instance_14 = new lib.foot("synched",0);
	this.instance_14.setTransform(20.15,128.55,1,1,-0.9137,0,0,-4.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:-4.2,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-4.3409,x:27.35,y:127.5},0).to({regX:-4.3,rotation:-44.2413,x:18.4,y:112.5},8).to({regX:-4.4,scaleX:0.9998,scaleY:0.9998,rotation:23.9747,x:-7.55,y:120.25},7).to({regY:0.1,rotation:-0.23,x:15.85,y:129.35},8).to({regX:-4.2,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-4.3409,x:27.35,y:127.5},6).wait(1).to({regX:-4.4,regY:-0.3,scaleX:1,scaleY:1,rotation:0,skewX:0.9137,skewY:-179.0863,x:22.05,y:128.55},0).wait(1).to({regX:-4.2,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:4.3409,skewY:-175.6591,x:16.3,y:127.5},0).to({regX:-4.3,skewX:44.2413,skewY:-135.7587,x:25.75,y:112.5},8).to({regX:-4.4,scaleX:0.9998,scaleY:0.9998,skewX:-23.9747,skewY:-203.9747,x:49.9,y:120.25},7).to({regY:0.1,skewX:0.23,skewY:-179.77,x:26.95,y:129.35},8).to({regX:-4.2,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:4.3409,skewY:-175.6591,x:16.3,y:127.5},6).wait(1).to({regX:-4.4,regY:-0.3,scaleX:1,scaleY:1,rotation:-0.9137,skewX:0,skewY:0,x:20.15,y:128.55},0).to({_off:true},1).wait(15).to({_off:false,rotation:0,skewX:0.9137,skewY:-179.0863,x:22.05},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,rotation:-0.9137,skewX:0,skewY:0,x:20.15},0).wait(1));

	// RightShoulder
	this.instance_15 = new lib.shoulder("synched",0);
	this.instance_15.setTransform(17.3,43.35,0.9999,0.9999,-0.0752,0,0,-42.1,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({x:17.55},0).to({regX:-42.2,regY:14.1,rotation:-10.7809,x:18.1,y:44},8).to({regX:-42.1,rotation:-23.7267,x:17.2,y:43.15},7).to({rotation:19.2421,x:16.5,y:44.45},8).to({regY:14.2,rotation:-0.0752,x:17.55,y:43.35},6).wait(1).to({rotation:0,skewX:0.0752,skewY:-179.9248,x:24.9},0).wait(1).to({x:26.1},0).to({regX:-42.2,regY:14.1,skewX:10.7809,skewY:-169.2191,x:26.05,y:44},8).to({regX:-42.1,skewX:23.7267,skewY:-156.2733,x:25.15,y:43.15},7).to({skewX:-19.2421,skewY:-199.2423,x:26.3,y:44.45},8).to({regY:14.2,skewX:0.0752,skewY:-179.9248,x:26.1,y:43.35},6).wait(1).to({rotation:-0.0752,skewX:0,skewY:0,x:17.3},0).to({_off:true},1).wait(15).to({_off:false,rotation:0,skewX:0.0752,skewY:-179.9248,x:24.9},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,rotation:-0.0752,skewX:0,skewY:0,x:17.3},0).wait(1));

	// RightElbow
	this.instance_16 = new lib.elbow("synched",0);
	this.instance_16.setTransform(17.1,63.35,0.9998,0.9998,0.4057,0,0,22.6,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({rotation:64.3771,x:17.3,y:62.95},0).to({regX:22.5,regY:31.5,rotation:-9.7874,x:21.45,y:63.2},8).to({regX:22.4,regY:31.4,rotation:-22.7327,x:24.7,y:61.05},7).to({rotation:20.2358,x:9.8,y:62.65},8).to({regX:22.6,regY:31.6,rotation:64.3771,x:17.3,y:62.95},6).wait(1).to({rotation:0,skewX:-0.4057,skewY:179.5943,x:25.1,y:63.35},0).wait(1).to({skewX:-64.3771,skewY:115.6229,x:26.35,y:62.95},0).to({regX:22.5,regY:31.5,skewX:9.7874,skewY:189.7874,x:22.7,y:63.2},8).to({regX:22.4,regY:31.4,skewX:22.7327,skewY:202.7327,x:17.65,y:61.05},7).to({skewX:-20.2358,skewY:159.7642,x:33,y:62.65},8).to({regX:22.6,regY:31.6,skewX:-64.3771,skewY:115.6229,x:26.35,y:62.95},6).wait(1).to({rotation:0.4057,skewX:0,skewY:0,x:17.1,y:63.35},0).to({_off:true},1).wait(15).to({_off:false,rotation:0,skewX:-0.4057,skewY:179.5943,x:25.1},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,rotation:0.4057,skewX:0,skewY:0,x:17.1},0).wait(1));

	// RightWrist
	this.instance_17 = new lib.hand("synched",0);
	this.instance_17.setTransform(17.1,83.4,0.9999,0.9999,-0.7598,0,0,-0.1,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:0,regY:-1.5,rotation:63.2109,x:-0.65,y:71.85},0).to({regX:-0.1,regY:-1.4,rotation:-10.9526,x:25.15,y:82.95},8).to({regX:0,regY:-1.5,rotation:-23.8984,x:32.8,y:79.4},7).to({regY:-1.4,rotation:19.0701,x:3.2,y:81.65},8).to({regY:-1.5,rotation:63.2109,x:-0.65,y:71.85},6).wait(1).to({regX:-0.1,regY:-1.6,rotation:0,skewX:0.7598,skewY:-179.2402,x:25.1,y:83.4},0).wait(1).to({regX:0,regY:-1.5,skewX:-63.2109,skewY:-243.2109,x:44.3,y:71.85},0).to({regX:-0.1,regY:-1.4,skewX:10.9526,skewY:-169.0474,x:19,y:82.95},8).to({regX:0,regY:-1.5,skewX:23.8984,skewY:-156.1013,x:9.55,y:79.4},7).to({regY:-1.4,skewX:-19.0701,skewY:-199.0701,x:39.6,y:81.65},8).to({regY:-1.5,skewX:-63.2109,skewY:-243.2109,x:44.3,y:71.85},6).wait(1).to({regX:-0.1,regY:-1.6,rotation:-0.7598,skewX:0,skewY:-360,x:17.1,y:83.4},0).to({_off:true},1).wait(15).to({_off:false,rotation:0,skewX:0.7598,skewY:-539.2402,x:25.1},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,rotation:-0.7598,skewX:0,skewY:-360,x:17.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-1.7,92.19999999999999,144.5);


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
	this.shape_87.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgB8AtpMgAUhbREACRAtpMgAUhbR");
	this.shape_87.setTransform(96.55,76.025);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3B3B3B").s().p("AgPAPQgFgGAAgJQAAgIAFgGQAHgHAIAAQAJAAAGAHQAHAGgBAIQABAJgHAGQgGAGgJABQgIgBgHgGg");
	this.shape_88.setTransform(97.7,366.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EACRAtpMgAUhbREgB8AtpMgAUhbR");
	this.shape_89.setTransform(96.55,76.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCVgtoIANVRIgNSwIAXVaIgLOYIAIPeEACAgtoIAMVRIgNSwIAXVaIgLOYIAJPe");
	this.shape_90.setTransform(97.025,84.125);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3B3B3B").s().p("AgPAOQgFgHAAgIQAAgJAFgGQAYgGAGAGQAHAGgBAJQABAIgHAHQgGAGgJAAQgIAAgHgGg");
	this.shape_91.setTransform(97.7,374.55);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EACYAtpIgOveIAZuYIgp1aIAdywIgT1REgCEAtpIgNveIAYuYIgp1aIAeywIgU1R");
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
	this.shape_96.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCMAtpIAbvoIgkuEIAJ1kIgV0yIABzPEACHAtpIAavoIgjuEIAJ1kIgV0yIABzP");
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
	this.shape_102.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EgCEAtpIgNveIAYuYIgp1aIAeywIgU1REACYAtpIgOveIAZuYIgp1aIAdywIgT1R");
	this.shape_102.setTransform(97.3251,159.725);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3B3B3B").s().p("AgPAOQgFgGAAgJQAAgJAFgGQAYgGAGAGQAHAGgBAJQABAJgHAGQgGAGgJAAQgIAAgHgGg");
	this.shape_103.setTransform(97.7,466.35);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#5F5F5F").ss(8,1,0,3).p("EACHAtpIAavoIgjuEIAJ1kIgV0yIABzPEgCMAtpIAbvoIgkuEIAJ1kIgV0yIABzP");
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
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(747.65,342.9,0.5,0.5);

	this.btnWalkRight = new lib.btnTemplate();
	this.btnWalkRight.name = "btnWalkRight";
	this.btnWalkRight.setTransform(812,356);
	new cjs.ButtonHelper(this.btnWalkRight, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(750.25,281.3,0.5,0.5);

	this.btnWalkLeft = new lib.btnTemplate();
	this.btnWalkLeft.name = "btnWalkLeft";
	this.btnWalkLeft.setTransform(813,294.4);
	new cjs.ButtonHelper(this.btnWalkLeft, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.instance_2 = new lib.CachedBmp_10();
	this.instance_2.setTransform(725.65,408.9,0.5,0.5);

	this.btnWalkTurn = new lib.btnTemplate();
	this.btnWalkTurn.name = "btnWalkTurn";
	this.btnWalkTurn.setTransform(813,423);
	new cjs.ButtonHelper(this.btnWalkTurn, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.instance_3 = new lib.CachedBmp_9();
	this.instance_3.setTransform(518.65,342.9,0.5,0.5);

	this.btnTurnRight = new lib.btnTemplate();
	this.btnTurnRight.name = "btnTurnRight";
	this.btnTurnRight.setTransform(583,356);
	new cjs.ButtonHelper(this.btnTurnRight, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.instance_4 = new lib.CachedBmp_8();
	this.instance_4.setTransform(511.85,407.1,0.5,0.5);

	this.btnTurnAround = new lib.btnTemplate();
	this.btnTurnAround.name = "btnTurnAround";
	this.btnTurnAround.setTransform(585,420.2);
	new cjs.ButtonHelper(this.btnTurnAround, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.instance_5 = new lib.CachedBmp_7();
	this.instance_5.setTransform(520.25,281.3,0.5,0.5);

	this.btnTurnLeft = new lib.btnTemplate();
	this.btnTurnLeft.name = "btnTurnLeft";
	this.btnTurnLeft.setTransform(583,294.4);
	new cjs.ButtonHelper(this.btnTurnLeft, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.instance_6 = new lib.CachedBmp_6();
	this.instance_6.setTransform(275.95,340.95,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_5();
	this.instance_7.setTransform(287.9,280.95,0.5,0.5);

	this.btnBankOpen = new lib.btnTemplate();
	this.btnBankOpen.name = "btnBankOpen";
	this.btnBankOpen.setTransform(350.7,294.05);
	new cjs.ButtonHelper(this.btnBankOpen, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.btnBankClose = new lib.btnTemplate();
	this.btnBankClose.name = "btnBankClose";
	this.btnBankClose.setTransform(350.7,354.05);
	new cjs.ButtonHelper(this.btnBankClose, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.instance_8 = new lib.CachedBmp_4();
	this.instance_8.setTransform(58.05,468.15,0.5,0.5);

	this.btnElevUp = new lib.btnTemplate();
	this.btnElevUp.name = "btnElevUp";
	this.btnElevUp.setTransform(124.8,481.25);
	new cjs.ButtonHelper(this.btnElevUp, 0, 1, 2, false, new lib.btnTemplate(), 3);

	this.instance_9 = new lib.CachedBmp_3();
	this.instance_9.setTransform(26.95,343.95,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_2();
	this.instance_10.setTransform(63.65,405,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_1();
	this.instance_11.setTransform(33.05,279.25,0.5,0.5);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnElevOpen},{t:this.btnElevDown},{t:this.btnElevClose},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.btnElevUp},{t:this.instance_8},{t:this.btnBankClose},{t:this.btnBankOpen},{t:this.instance_7},{t:this.instance_6},{t:this.btnTurnLeft},{t:this.instance_5},{t:this.btnTurnAround},{t:this.instance_4},{t:this.btnTurnRight},{t:this.instance_3},{t:this.btnWalkTurn},{t:this.instance_2},{t:this.btnWalkLeft},{t:this.instance_1},{t:this.btnWalkRight},{t:this.instance}]}).wait(1));

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
	this.miner_mc = new lib.miner_mc();
	this.miner_mc.name = "miner_mc";
	this.miner_mc.setTransform(812.6,662.9,1.3018,1.3012,0,0,0,21.2,69.1);

	this.timeline.addTween(cjs.Tween.get(this.miner_mc).wait(1));

	// Shaft
	this.instance_12 = new lib.shaft("synched",0);
	this.instance_12.setTransform(949.9,510.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Divider
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(5,2,1).p("EhPnAUUMCfPgABEhPogUTMCfPAAA");
	this.shape_1.setTransform(512.1001,388.2501);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Town
	this.town_mc = new lib.town();
	this.town_mc.name = "town_mc";

	this.timeline.addTween(cjs.Tween.get(this.town_mc).wait(1));

	// Tunnel
	this.instance_13 = new lib.tunnel_mc();
	this.instance_13.setTransform(512.05,640);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

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
{
    var _ns_ = {
        id: 'atomita.js.telos.main',
        doc: void 0
    };
    var util = require('util');
    var wildemitter = require('wildemitter');
    var minimatch = require('minimatch');
    var atomita_js_telos_node = require('./node');
}
void 0;
(function () {
    var defChannelø1 = '---default---';
    var telos = function telos(signaller, opt) {
        return this instanceof telos ? function () {
            return wildemitter.call(this);
        }.call(this) : new telos(signaller, opt);
    };
    util.inherits(telos, wildemitter);
    extend(telos.prototype, {
        'broadcast': function broadcast(channel) {
            return !channel ? channel = defChannelø1 : void 0;
        },
        'add': function add(node, channels) {
            isString(channels) ? channels = [channels] : void 0;
            !util.isArray(channels) ? channels = [] : void 0;
            0 > channels.indexOf(defChannelø1) ? channels.push(defChannelø1) : void 0;
            return this;
        }
    });
    var isString = function isString(v) {
        return v instanceof String || 'string' == typeof(v);
    };
    return exports = telos;
}.call(this));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsImRlZkNoYW5uZWzDuDEiLCJ0ZWxvcyIsInNpZ25hbGxlciIsIm9wdCIsInRoaXMiLCJ3aWxkZW1pdHRlciIsImNhbGwiLCJ1dGlsIiwiaW5oZXJpdHMiLCJleHRlbmQiLCJwcm90b3R5cGUiLCJicm9hZGNhc3QiLCJjaGFubmVsIiwiYWRkIiwibm9kZSIsImNoYW5uZWxzIiwiaXNTdHJpbmciLCJpc0FycmF5IiwiaW5kZXhPZiIsInB1c2giLCJ2IiwiU3RyaW5nIiwidHlwZW9mIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUNBLEksR0FBRDtBQUFBLFFBQUFDLEUsRUFBSSx1QkFBSjtBQUFBLFFBQUFDLEcsRUFBQSxLLENBQUE7QUFBQSxNOzs7Ozs7O0FBZ0JBLEM7UUFDTUMsWTtJQUVKLElBQU9DLEtBQUEsR0FBUCxTQUFPQSxLQUFQLENBQ0dDLFNBREgsRUFDYUMsR0FEYixFQUVFO0FBQUEsZUFBcUJDLElBQWpCLFlBQVdILEtBQWYsRyxZQUVJO0FBQUEsbUJBQUNJLFdBQUEsQ0FBWUMsSUFBYixDQUFrQkYsSUFBbEI7QUFBQSxTLEtBREYsQyxJQUFBLENBREYsR0FHRSxJLEtBQUEsQ0FBUUYsU0FBUixFQUFrQkMsR0FBbEIsQ0FIRjtBQUFBLEtBRkYsQztJQU9DSSxJQUFBLENBQUtDLFFBQU4sQ0FBZVAsS0FBZixFQUFxQkksV0FBckIsRTtJQUVDSSxNQUFELENBQVFSLEtBQUEsQ0FBTVMsU0FBZCxFQUNFO0FBQUEsUSxhQUVDLFNBQUlDLFNBQUosQ0FDR0MsT0FESCxFQUVFO0FBQUEsbUJBQUksQ0FBS0EsT0FBVCxHQUF3QkEsT0FBTixHQUFjWixZQUFoQyxHLE1BQUE7QUFBQSxTQUpIO0FBQUEsUSxPQVFDLFNBQUlhLEdBQUosQ0FBU0MsSUFBVCxFQUFjQyxRQUFkLEVBQ0U7QUFBQSxZQUFLQyxRQUFELENBQVNELFFBQVQsQ0FBSixHQUE2QkEsUUFBTixHQUFlLENBQUNBLFFBQUQsQ0FBdEMsRyxNQUFBO0FBQUEsWUFDSSxDQUFNUixJQUFBLENBQUtVLE9BQU4sQ0FBYUYsUUFBYixDQUFULEdBQXVDQSxRQUFOLEdBQWUsRUFBaEQsRyxNQUFBLENBREE7QUFBQSxZQUVPLENBQUgsR0FBTUEsUUFBQSxDQUFTRyxPQUFWLENBQWtCbEIsWUFBbEIsQ0FBVCxHQUEwQ2UsUUFBQSxDQUFTSSxJQUFWLENBQWVuQixZQUFmLENBQXpDLEcsTUFBQSxDQUZBO0FBQUEsWUFHQSxPQUFBSSxJQUFBLENBSEE7QUFBQSxTQVRIO0FBQUEsS0FERixFO0lBaUJBLElBQU9ZLFFBQUEsR0FBUCxTQUFPQSxRQUFQLENBQWdCSSxDQUFoQixFQUNFO0FBQUEsZUFBc0JBLENBQWxCLFlBQVdDLE1BQWYsSUFDUSxRQUFKLElBQWNDLE1BQUQsQ0FBUUYsQ0FBUixDQURqQjtBQUFBLEtBREYsQztJQUlBLE9BQU1HLE9BQU4sR0FBY3RCLEtBQWQsQztNQWpDRixDLElBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIobnMgYXRvbWl0YS5qcy50ZWxvcy5tYWluXG4gICg6cmVxdWlyZSBbdXRpbF1cbiAgICAgICAgICAgIFt3aWxkZW1pdHRlcl1cbiAgICAgICAgICAgIFttaW5pbWF0Y2hdXG4gICAgICAgICAgICBbYXRvbWl0YS5qcy50ZWxvcy5ub2RlXSkpXG5cbihkZWZtYWNybyAtPlxuICBcIm1ldGhvZCBjaGFpbmluZy5cIlxuICBbJiBvcGVyYXRpb25zXVxuICAocmVkdWNlXG4gICAoZm4gW2Zvcm0gb3BlcmF0aW9uXVxuICAgICAoY29ucyAoZmlyc3Qgb3BlcmF0aW9uKVxuICAgICAgICAgICAoY29ucyBmb3JtIChyZXN0IG9wZXJhdGlvbikpKSlcbiAgIChmaXJzdCBvcGVyYXRpb25zKVxuICAgKHJlc3Qgb3BlcmF0aW9ucykpKVxuXG4obGV0IFtcbiAgICAgIGRlZi1jaGFubmVsIDotLS1kZWZhdWx0LS0tXG4gICAgICBdXG4gIChkZWZuLSB0ZWxvc1xuICAgIFtzaWduYWxsZXIgb3B0XVxuICAgIChpZiAoaW5zdGFuY2U/IHRlbG9zIHRoaXMpXG4gICAgICAobGV0IFtdXG4gICAgICAgICh3aWxkZW1pdHRlci5jYWxsIHRoaXMpKVxuICAgICAgKHRlbG9zLiBzaWduYWxsZXIgb3B0KSkpXG5cbiAgKHV0aWwuaW5oZXJpdHMgdGVsb3Mgd2lsZGVtaXR0ZXIpXG5cbiAgKGV4dGVuZCB0ZWxvcy5wcm90b3R5cGVcbiAgICB7XG4gICAgIDpicm9hZGNhc3RcbiAgICAgKGZuIGJyb2FkY2FzdFxuICAgICAgIFtjaGFubmVsXVxuICAgICAgIChpZiAobm90IGNoYW5uZWwpIChzZXQhIGNoYW5uZWwgZGVmLWNoYW5uZWwpKVxuICAgICAgIClcblxuICAgICA6YWRkXG4gICAgIChmbiBhZGQgW25vZGUgY2hhbm5lbHNdXG4gICAgICAgKGlmIChzdHJpbmc/IGNoYW5uZWxzKSAoc2V0ISBjaGFubmVscyBbY2hhbm5lbHNdKSlcbiAgICAgICAoaWYgKG5vdCAodXRpbC5hcnJheT8gY2hhbm5lbHMpKSAoc2V0ISBjaGFubmVscyBbXSkpXG4gICAgICAgKGlmICg+IDAgKGNoYW5uZWxzLmluZGV4T2YgZGVmLWNoYW5uZWwpKSAoY2hhbm5lbHMucHVzaCBkZWYtY2hhbm5lbCkpXG4gICAgICAgdGhpcylcblxuICAgICB9KVxuICBcbiAgKGRlZm4tIHN0cmluZz8gW3ZdXG4gICAgKG9yIChpbnN0YW5jZT8gU3RyaW5nIHYpXG4gICAgICAgICg9PSBcInN0cmluZ1wiICh0eXBlb2YgdikpKSlcbiAgXG4gIChzZXQhIGV4cG9ydHMgdGVsb3MpXG4gIClcbiJdfQ==
